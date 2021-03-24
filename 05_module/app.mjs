
//  可能是版本的问题 这里没有支持
import('./name.mjs').then(res => {
  const { name, changeName } = res
  console.log(name);
  changeName()
  console.log(name);
})

