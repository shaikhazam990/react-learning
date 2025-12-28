
import React from 'react'
import Card from './components/Cards';

const App = () => {
  const users = [
  {
    id: 1,
    fullName: "Ahmed Raza",
    title: "Frontend Developer",
    likeCount: 420,
    views: 8200,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: 2,
    fullName: "Ayesha Noor",
    title: "UI/UX Designer",
    likeCount: 610,
    views: 10400,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    id: 3,
    fullName: "Mohammad Ali",
    title: "MERN Stack Developer",
    likeCount: 530,
    views: 9600,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  },
  {
    id: 4,
    fullName: "Fatima Zahra",
    title: "Product Designer",
    likeCount: 720,
    views: 13200,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    id: 5,
    fullName: "Abdul Rahman",
    title: "Backend Developer",
    likeCount: 310,
    views: 5400,
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    id: 6,
    fullName: "Zainab Khan",
    title: "Web Designer",
    likeCount: 680,
    views: 11900,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    id: 7,
    fullName: "Usman Farooq",
    title: "Full Stack Engineer",
    likeCount: 455,
    views: 8900,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    id: 8,
    fullName: "Hafsa Malik",
    title: "React Developer",
    likeCount: 570,
    views: 10100,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    id: 9,
    fullName: "Bilal Ahmed",
    title: "JavaScript Developer",
    likeCount: 390,
    views: 7600,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 10,
    fullName: "Maryam Siddiqui",
    title: "Creative Technologist",
    likeCount: 840,
    views: 15200,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  }
];

  return (
<div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-6">
    User Profiles
  </h1>

  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center gap-6">
      {users.map((user) => (
        <Card
          key={user.id}
          fullName={user.fullName}
          title={user.title}
          likeCount={user.likeCount}
          views={user.views}
          image={user.image}
        />
      ))}
    </div>
  </div>
</div>

  )

}

export default App