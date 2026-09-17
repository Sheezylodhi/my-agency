export default function EmailSignature() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: "100px",
      }}
    >
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{
          borderCollapse: "collapse",
          borderSpacing: "0",
        }}
      >
        <tbody>
          <tr>
            {/* LOGO SECTION */}
           

            {/* DIVIDER */}
            <td
              style={{
                width: "1px",
                backgroundColor: "#d8e2dc",
                padding: 0,
              }}
            />

            {/* TEXT SECTION */}
            <td
              style={{
                verticalAlign: "middle",
                paddingLeft: "24px",
              }}
            >
              {/* NAME */}
              <h2
                style={{
                  margin: "0",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#0e2c1c",
                  lineHeight: "24px",
                }}
              >
                Evan Brooks
              </h2>

              {/* POSITION */}
              <p
                style={{
                  margin: "2px 0 8px 0",
                  fontSize: "13px",
                  color: "#0e2c1c",
                  fontWeight: "600",
                }}
              >
                WebMash Sales Team
              </p>

              {/* CONTACT INFORMATION */}
              <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  margin: "0 0 8px 0",
                }}
              >
                <tbody>
                  {/* WEBSITE + PHONE */}
                   {/* EMAIL */}
                  <tr>
                    <td
                      style={{
                        width: "22px",
                        paddingBottom: "4px",
                        fontSize: "13px",
                        color: "#0e2c1c",
                      }}
                    >
                      ✉
                    </td>

                    <td
                      colSpan={3}
                      style={{
                        paddingBottom: "4px",
                      }}
                    >
                      <a
                        href="mailto:info@webmashlabs.com"
                        style={{
                          fontSize: "13px",
                          color: "#334155",
                          textDecoration: "none",
                        }}
                      >
                        info@webmashlabs.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    {/* WEBSITE ICON */}
                    <td
                      style={{
                        width: "22px",
                        paddingBottom: "4px",
                        fontSize: "13px",
                      }}
                    >
                      🌐
                    </td>

                    {/* WEBSITE */}
                    <td
                      style={{
                        paddingBottom: "4px",
                        paddingRight: "18px",
                      }}
                    >
                      <a
                        href="https://www.webmashlabs.com/"
                        style={{
                          fontSize: "13px",
                          color: "#334155",
                          textDecoration: "none",
                        }}
                      >
                        webmashlabs.com
                      </a>
                    </td>

                  

                   
                  </tr>

                 

                  {/* LOCATION */}
                  <tr>
                    <td
                      style={{
                        width: "22px",
                        verticalAlign: "top",
                        fontSize: "13px",
                        color: "#0e2c1c",
                      }}
                    >
                      📍
                    </td>

                    <td
                      colSpan={3}
                      style={{
                        fontSize: "13px",
                        color: "#334155",
                        lineHeight: "17px",
                      }}
                    >
                      7901 4th St N, St. Petersburg, FL 33702
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* SOCIAL ICONS */}
              <table
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  marginTop: "4px",
                }}
              >
              
              </table>

              {/* SERVICES */}
              <p
                style={{
                  margin: "9px 0 0 0",
                  fontSize: "12px",
                  fontStyle: "bold",
                  color: "#000000",
                }}
              >
                Full Stack Web Developer | WordPress | UI/UX Designer
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}