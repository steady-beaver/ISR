const TabMenu = ({ option, setOption }) => {
  return (
    <div>
      <ul>
        <li className={option === 'couple' ? 'active' : ''} onClick={() => setOption('couple')}>
          Couple
        </li>
        <li className={option === 'wedding' ? 'active' : ''} onClick={() => setOption('wedding')}>
          Wedding
        </li>
        <li className={option === 'elopement' ? 'active' : ''} onClick={() => setOption('elopement')}>
          Elopement
        </li>
      </ul>
    </div>
  );
};

export default TabMenu;
