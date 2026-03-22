const fs = require('fs');
const path = require('path');

function findStyles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findStyles(filePath));
    } else if (file.endsWith('Styles.js') || file.endsWith('Styles.jsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = findStyles(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content;

  // Replace background: var(--primary-color), transparent XX%) -> radial-gradient
  updated = updated.replace(/background:\s*(\{.*?})\s*=>\s*theme\.isDarkMode\s*\?\s*'var\(--primary-color\),\s*transparent\s+(\d+)%\)'\s*:\s*'var\(--primary-color\),\s*transparent\s+(\d+)%\)'};/gs, 
    "background: ${({ theme }) => theme.isDarkMode ? 'radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, transparent $2%)' : 'radial-gradient(circle, rgba(128, 0, 0, 0.1) 0%, transparent $3%)'};");

  // Fix HeaderStyles double gradient bug
  updated = updated.replace(/'var\(--primary-color\),\s*transparent\s*\d+%\),\s*var\(--primary-color\),\s*transparent\s*\d+%\)'/g, 
    "'radial-gradient(circle at top left, rgba(128, 0, 0, 0.15) 0%, transparent 70%), radial-gradient(circle at bottom right, rgba(128, 0, 0, 0.1) 0%, transparent 70%)'");

  // Fix BlogStyles broken linear-gradient
  updated = updated.replace(/background:\s*var\(--primary-color\),\s*transparent\);/g, 
    "background: linear-gradient(90deg, var(--primary-color), transparent);");
    
  // Fix SkillsStyles broken linear-gradient
  updated = updated.replace(/background:\s*linear-gradient\(90deg,\s*transparent,\s*var\(--primary-color\),\s*transparent\);/g, 
    "background: linear-gradient(90deg, transparent, rgba(128, 0, 0, 0.5), transparent);");

  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Fixed gradients in', file);
  }
});
