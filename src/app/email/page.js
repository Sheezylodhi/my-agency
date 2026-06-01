export default function EmailSignature() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        paddingTop: "100px",
      }}
    >
      <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {/* LOGO SECTION */}
            <td style={{ verticalAlign: "middle", paddingRight: "24px" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  border: "2px solid #0a66c2",
                  backgroundColor: "#060f23",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://my-agency-omega-two.vercel.app/webmashlogo (2).png"
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "6px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </td>

            {/* DIVIDER */}
            <td
              style={{
                width: "1px",
                backgroundColor: "#e2e8f0",
                padding: 0,
              }}
            />

            {/* TEXT SECTION */}
            <td style={{ verticalAlign: "middle", paddingLeft: "24px" }}>
              {/* NAME */}
             {/* NAME */}
<h2
  style={{
    margin: "0",
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    letterSpacing: "-0.5px",
  }}
>
  Evan Brooks
</h2>

{/* POSITION */}
<p
  style={{
    margin: "2px 0 0 0",
    fontSize: "13px",
    color: "#0a66c2",
    fontWeight: "600",
  }}
>
  Sales Representative
</p>

{/* COMPANY */}
<p
  style={{
    margin: "4px 0 12px 0",
    fontSize: "12px",
    color: "#64748b",
    fontWeight: "500",
    letterSpacing: "0.5px",
  }}
>
  WEBMASH LABS
</p>

              {/* ROLE */}
              <p
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "12px",
                  color: "#0a66c2",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                
                Full Stack Web Developer
                <span
                  style={{
                    color: "#cbd5e1",
                    margin: "0 4px",
                    fontWeight: "normal",
                  }}
                >
                  |
                </span>
                WordPress
                <span
                  style={{
                    color: "#cbd5e1",
                    margin: "0 4px",
                    fontWeight: "normal",
                  }}
                >
                  |
                </span>
                UI/UX Designer
              </p>

              {/* CONTACT DETAILS */}
              <table cellPadding="0" cellSpacing="0" style={{ margin: "0 0 8px 0" }}>
                <tbody>
                  {/* WEBSITE */}
                  <tr>
                    <td
                      style={{
                        paddingRight: "8px",
                        paddingBottom: "4px",
                        color: "#64748b",
                        fontSize: "13px",
                      }}
                    >
                      🌐
                    </td>
                    <td style={{ paddingBottom: "4px" }}>
                      <a
                        href="https://my-agency-omega-two.vercel.app/"
                        style={{
                          fontSize: "13px",
                          color: "#334155",
                          textDecoration: "none",
                          fontWeight: "500",
                        }}
                      >
                        webmashlabs.com
                      </a>
                    </td>
                  </tr>

                  {/* EMAIL */}
                  <tr>
                    <td
                      style={{
                        paddingRight: "8px",
                        color: "#64748b",
                        fontSize: "13px",
                      }}
                    >
                      ✉️
                    </td>
                    <td>
                      <a
                        href="mailto:webmashlabs21@gmail.com"
                        style={{
                          fontSize: "13px",
                          color: "#334155",
                          textDecoration: "none",
                          fontWeight: "500",
                        }}
                      >
                        webmashlabs21@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* SLOGAN */}
              <p
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "12px",
                  fontStyle: "italic",
                  fontWeight: "500",
                  color: "#94a3b8",
                  letterSpacing: "0.3px",
                }}
              >
                Design. Develop. Dominate.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}