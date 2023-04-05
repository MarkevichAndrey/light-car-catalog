import BMW from '../Cars/BMW'

import Lexus from '../Cars/Lexus'
import CreateCarForm from '../CreateCarForm'

const Home = () => {
  return (
    <>
      <h1> Cars catalog</h1>
      <CreateCarForm />
      <BMW />
      <Lexus />
    </>
  )
}

export default Home
