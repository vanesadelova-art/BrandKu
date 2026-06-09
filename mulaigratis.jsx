const MulaiGratis = () => {
  const handleClick = () => {
    alert("Tombol diklik! Arahkan ke form registrasi.");
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '12px 30px',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500'
      }}
    >
      Mulai Gratis
    </button>
  );
};

ReactDOM.render(<MulaiGratis />, document.getElementById('react-button-root'));