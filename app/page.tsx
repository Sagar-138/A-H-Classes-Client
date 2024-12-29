import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import ClassSections from './components/Courses/courses'

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      {/* <Courses /> */}
      <ClassSections/>

      <Mentor />
      <Testimonials />
      {/* <Newsletter /> */}
    </main>
  )
}
