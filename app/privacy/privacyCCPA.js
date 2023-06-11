'use client';

export default function Privacy_CCPA() {
  const columns = [
    { name: "Category", uid: "category" },
    //{ name: "role", uid: "role" },
    //{ name: "Collected", uid: "status" },
    //{ name: "ACTIONS", uid: "actions" },
    //{ name: "Example", uid: "example" },
    { name: "Collected", uid: "collected" },
  ];
  const ccpa = [
    {
      id: 1,
      category: "A. Identifiers",
      example:
        "Contact details, such as real name, alias, postal  address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name",
      collected: "YES",
    },
    {
      id: 2,
      category: "B. Personal information",
      example:
        "Categories listed in the California Customer Records statute: Name, contact information, education, employment, employment history and financial information",
      collected: "YES",
    },
    {
      id: 3,
      category: "C. Protected classification",
      example:
        "Characteristics under California or federal law: Gender and date of birth",
      collected: "NO",
    },
    {
      id: 4,
      category: "D. Commercial information",
      example:
        "Transaction information, purchase history, financial details and payment information",
      collected: "NO",
    },
    {
      id: 5,
      category: "E. Biometric information",
      example: "Fingerprints and voiceprints",
      collected: "NO",
    },
    {
      id: 6,
      category: "F. Internet or other similar network activity",
      example:
        "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements",
      collected: "NO",
    },
    {
      id: 7,
      category: "G. Geolocation data",
      example: "Device location",
      collected: "NO",
    },
    {
      id: 8,
      category:
        "H. Audio, electronic, visual, thermal, olfactory, or similar information",
      example:
        "Images and audio, video or call recordings created in connection with our business activities",
      collected: "NO",
    },
    {
      id: 9,
      category: "I. Professional or employment-related information",
      example:
        "Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us",
      collected: "NO",
    },
    {
      id: 10,
      category: "J. Education Information",
      example: "Student records and directory information",
      collected: "NO",
    },
    {
      id: 11,
      category: "K. Inferences drawn from other personal information",
      example:
        "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics",
      collected: "NO",
    },
  ];
  const renderCell = (ccpa, columnKey) => {
    const cellValue = ccpa[columnKey];
    switch (columnKey) {
      case "category":
        return (
          <Col>
            <Row>
              <Text
                category={cellValue}
                css={{ maxWidth: "80%" }}
                wrap="flex-wrap"
              >
                {ccpa.category}
              </Text>
            </Row>
            <Row>
              <Text
                wrap="flex-wrap"
                hideIn="md"
                size="$xs"
                css={{ maxWidth: "20%" }}
              >
                {ccpa.example}
              </Text>
            </Row>
          </Col>
        );

      default:
        return cellValue;
    }
  };
  return (
      <div className="overflow-x-auto">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <td>Category</td>
            <td>Collected</td>
            <td></td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>A. Identifiers</td>
            <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</td>
            <td>
              <CheckYes />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>B. Personal information</td>
            <td>Categories listed in the California Customer Records statute: Name, contact information, education, employment, employment history and financial information</td>
            <td>
              <CheckYes />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>C. Protected classification</td>
            <td>Characteristics under California or federal law: Gender and date of birth</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>D. Transaction information, purchase history, financial details and payment information</td>
            <td>Office Assistant I</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>E. Biometric information</td>
            <td>Fingerprints and voiceprints</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>F. Internet or other similar network activity</td>
            <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
            <td>Images and audio, video or call recordings created in connection with our business activities</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>I. Professional or employment-related information"</td>
            <td>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>J. Education Information</td>
            <td>Student records and directory information</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <td>K. Inferences drawn from other personal information</td>
            <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
            <td>
              <CheckNo />
            </td>
            <th></th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>Category</td>
            <td>Collected</td>
            <td></td>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>

  );
}

function CheckYes(){
  return(
  <svg height="1em" viewBox="0 0 512 512">
    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
  </svg>
  );
}
function CheckNo(){
  return(
    <svg height="1em" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
    </svg>
  );
}