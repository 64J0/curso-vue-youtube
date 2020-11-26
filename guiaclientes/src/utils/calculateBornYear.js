const calculateBornYear = ({ idade }) => {
  const actualYear = new Date().getFullYear();
  return actualYear - idade;
}

export default calculateBornYear;