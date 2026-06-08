export default function EmailSignature() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", padding: "20px" }}>
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", borderSpacing: "0" }}>
        <tbody>
          <tr>
            {/* LOGO SECTION - Removed complex div nesting for better email compatibility */}
            <td style={{ verticalAlign: "middle", paddingRight: "24px" }}>
  <div
    style={{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      border: "2px solid #0a66c2",
      backgroundColor: "#060f23",
      display: "block",
      overflow: "hidden",
      // Important: Yeh image ko box ke andar center karega
      textAlign: "center",
      lineHeight: "90px" 
    }}
  >
    <img
  src="https://my-agency-omega-two.vercel.app/webmashfinallogo.png"
  alt="Logo"
  width="90" // Container size ke barabar kar diya
  height="90" // Container size ke barabar kar diya
  style={{
    display: "block",
    width: "90px",
    height: "90px",
    border: "none"
  }}
/>
  </div>
</td>

            {/* DIVIDER */}
            <td style={{ width: "1px", backgroundColor: "#e2e8f0", padding: 0 }} />

            {/* TEXT SECTION */}
            <td style={{ verticalAlign: "middle", paddingLeft: "24px" }}>
              <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>
                Evan Brooks
              </h2>
              <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#0a66c2", fontWeight: "600" }}>
                Sales Representative
              </p>
              <p style={{ margin: "4px 0 12px 0", fontSize: "12px", color: "#64748b", fontWeight: "500" }}>
                WEBMASH LABS
              </p>

              <p style={{ margin: "0 0 12px 0", fontSize: "12px", color: "#0a66c2", fontWeight: "600", textTransform: "uppercase" }}>
                Full Stack Web Developer | WordPress | UI/UX Designer
              </p>

              <table cellPadding="0" cellSpacing="0" style={{ margin: "0 0 8px 0" }}>
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "8px", fontSize: "13px" }}>🌐</td>
                    <td>
                      <a href="https://webmashlabs.vercel.app/" style={{ fontSize: "13px", color: "#334155", textDecoration: "none" }}>
                        webmashlabs.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingRight: "8px", fontSize: "13px" }}>✉️</td>
                    <td>
                      <a href="mailto:webmashlabs21@gmail.com" style={{ fontSize: "13px", color: "#334155", textDecoration: "none" }}>
                        webmashlabs21@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style={{ margin: "8px 0 0 0", fontSize: "12px", fontStyle: "italic", color: "#94a3b8" }}>
                Design. Develop. Dominate.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}