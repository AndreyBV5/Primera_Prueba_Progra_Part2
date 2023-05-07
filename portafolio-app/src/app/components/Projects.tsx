import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Carousel, Button } from "react-bootstrap"

interface Repo {
  id: number;
  name: string;
  description: string;
}

function Projects() {
  const [index, setIndex] = useState(0);
  const [repos, setRepos] = useState<Repo[]>([]);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(repos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index === repos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/AndreyBV5/repos');
      const data = await response.json();
      setRepos(data);
    };
    fetchData();
  }, []);

  return (
    <div className='Projectbox'>
      <div className="ProjectsH2">
        <section id="Projects">
          <h2>My Projects</h2>
          <Carousel activeIndex={index} onSelect={handleSelect} prevIcon={<Button variant="dark" onClick={handlePrevClick}>Back</Button>} nextIcon={<Button variant="dark" onClick={handleNextClick}>Next</Button>}>
            {repos.map((repo) => (
              <Carousel.Item key={repo.id}>
                {repo.name}
                <Carousel.Caption>
                  <div className="project-info">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}

export default Projects;