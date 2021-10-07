const obj = {
  outer: function() {
    const self1 = this
    console.log(this)

    const inner1 = () => {
      const self2 = this
      console.log(self2)

      const inner2 = () => {
        const self3 = this
        console.log(self3)
        console.log(self1 === self2 === true)
      }
    }
  }
}
obj.outer()

