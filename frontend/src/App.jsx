function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Luma
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          Discover the world through creativity.
        </p>

        <button
          style={{
            padding: "16px 36px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Exploring
        </button>
      </div>
    </main>
  );
}

export default App;
