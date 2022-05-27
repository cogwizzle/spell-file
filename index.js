const fs = require('fs')

module.exports = (spellbook) => {
  spellbook.readFile = (file) => fs.readFileSync(file, 'utf8')
  spellbook.writeFile = fs.writeFileSync
  spellbook.appendFile = fs.appendFileSync
}
