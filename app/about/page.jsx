import Card from '../components/Card.jsx';
import Footer from '../components/Footer';
import data from '../data/data.json';
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center mb-4 md:mb-5 py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-12 p-5">
        <Card
            author="Наши достижения"
            title="Мы предлагаем углубленные знания и практические навыки в IT, готовя вас к реальным вызовам индустрии."
          />
          <Card
            author="Успехи наших выпускников"
            title="Наши выпускники работают в ведущих IT-компаниях мира, таких как Apple, Google и Facebook."
          />
          <Card
            author="Что вы получите на курсе"
            title="Интерактивные занятия, актуальные знания, поддержка преподавателей и работа над реальными проектами помогут вам стать востребованным специалистом."
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12">
          <Card
            author="Отзывы наших студентов"
            title="Наши студенты отмечают высокое качество преподавания, дружелюбную атмосферу и практическую направленность курса."
          />
          <Card
            author="Поддержка после окончания"
            title="Мы продолжаем поддерживать наших выпускников и после окончания курса, помогая им в трудоустройстве и развитии карьеры."
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

