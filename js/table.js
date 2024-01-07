
    const jsonData = [
        {"Customer Name": "Jane Cooper", "Company": "Microsoft", "Phone Number": "(225) 555-0118", "Email": "jane@microsoft.com", "Country": "United States", "Status": "Active"},
        {"Customer Name": "Floyd Miles", "Company": "Yahoo", "Phone Number": "(205) 555-0100", "Email": "floyd@yahoo.com", "Country": "Kiribati", "Status": "Inactive"},
        {"Customer Name": "Ronald Richards", "Company": "Adobe", "Phone Number": "(302) 555-0107", "Email": "ronald@adobe.com", "Country": "Israel", "Status": "Inactive"},
        {"Customer Name": "Marvin McKinney", "Company": "Tesla", "Phone Number": "(252) 555-0126", "Email": "marvin@tesla.com", "Country": "Iran", "Status": "Active"},
        {"Customer Name": "Jerome Bell", "Company": "Google", "Phone Number": "(629) 555-0129", "Email": "jerome@google.com", "Country": "Réunion", "Status": "Active"},
        {"Customer Name": "Kathryn Murphy", "Company": "Microsoft", "Phone Number": "(406) 555-0120", "Email": "kathryn@microsoft.com", "Country": "Curaçao", "Status": "Active"},
        {"Customer Name": "Jacob Jones", "Company": "Yahoo", "Phone Number": "(208) 555-0112", "Email": "jacob@yahoo.com", "Country": "Brazil", "Status": "Active"},
        {"Customer Name": "Kristin Watson", "Company": "Facebook", "Phone Number": "(704) 555-0127", "Email": "kristin@facebook.com", "Country": "Åland Islands", "Status": "Inactive"},

    ];


    function populateTable(data) {
        const tableBody = document.getElementById('table-body');

        data.forEach(customer => {
            const row = document.createElement('tr');
            Object.entries(customer).forEach(([key, value]) => {
                const cell = document.createElement('td');
                cell.textContent = value;
                if (key === "Status") {
                    cell.classList.add(`status-${value.toLowerCase()}`);
                }
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    populateTable(jsonData);