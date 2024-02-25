
const handleMouseEnter = (id) => {
    const carElement = document.getElementById(id);
    if (carElement !== document.getElementById('mainCar')) {
      carElement.classList.add('hovered');
      document.getElementById('mainCar').classList.remove('hovered');
    }
  };

  const handleMouseLeave = () => {
    document.getElementById('car1').classList.remove('hovered');
    document.getElementById('car2').classList.remove('hovered');
    document.getElementById('mainCar').classList.add('hovered');
  };
