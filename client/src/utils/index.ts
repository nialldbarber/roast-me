import one from '~@assets/images/coffee/1.jpg'
import two from '~@assets/images/coffee/2.jpg'
import three from '~@assets/images/coffee/3.jpg'
import four from '~@assets/images/coffee/4.jpg'
import five from '~@assets/images/coffee/5.jpg'
import six from '~@assets/images/coffee/6.jpg'

export const randomCoffeeImageGenerator = () => {
	const arr: Array<string> = [ one, two, three, four, five, six ]
	return arr[Math.floor(Math.random() * arr.length)]
}
