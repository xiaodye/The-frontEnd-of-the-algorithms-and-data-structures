class WordDictionary {
  constructor() {
    // 初始化一个对象字面量，承担 Map 的角色
    this.words = new Map()
  }

  /**
   * 添加字符串
   * @param {string} word
   * @returns {void}
   */
  addWord(word) {
    // 字符串长度为键，数据类型为数组
    if (this.words.has(word.length)) {
      this.words.get(word.length).push(word)
    } else {
      this.words.set(word.length, [word])
    }
  }

  /**
   * 搜寻字符串
   * @param {string} str
   * @returns {boolean}
   */
  search(str) {
    // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
    // 如果字符串中不包含‘.’，那么一定是普通字符串
    if (!this.words.has(str.length)) return false
    if (!str.includes(".")) return this.words.get(str.length).includes(str)

    // 否则是正则表达式，要先创建正则表达式对象
    const reg = new RegExp(str)
    return this.words.get(str.length).some((item) => reg.test(item))
  }
}

// test
const wd = new WordDictionary()

wd.addWord("badd")
wd.addWord("dad")
wd.addWord("mad")

console.log(wd.search("pad"))
console.log(wd.search("badd"))
console.log(wd.search(".ad"))
console.log(wd.search("b..."))
console.log(wd.search("b.."))

debugger
