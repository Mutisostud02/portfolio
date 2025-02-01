const myStyles = {
    fontSize:'6rem',
    textAlign:'center',
    margin:0,
    padding:0,
    background: 'linear-gradient(90deg, #00ff87, #00d4ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}
export default function Home() {

    return (
        <div 
        className="home"
        style={{
        lineHeight: 1.1,
        borderRadius: '2.5rem',
        marginTop:0,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        minHeight:'100vh',
      

        }}
        >
            <p style={myStyles}>Hi, I’m Chris!</p>
            <p style={myStyles}>Welcome to my tech space.</p>

           
            <div
            style={{
                marginTop: '2rem',
                padding: '1rem',
                textAlign: 'center',
                maxWidth: '800px', 
                
              }}>
                <p style={{
                    ...myStyles, 
                    marginTop:'1rem',
                    fontSize: '3rem',
                    lineHeight: 1.5,
                    background: 'linear-gradient(90deg, rgb(200, 200, 200), rgb(160, 160, 160))',
                    }}>Turning ideas into reality with code.</p>
            </div>
      
        </div>
    )
    
}
