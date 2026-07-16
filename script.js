const attendanceList = document.getElementById("attendanceList");

function markAttendance(status){

    const name = document.getElementById("studentName").value.trim();

    if(name===""){
        alert("Please enter student name.");
        return;
    }

    const row = document.createElement("tr");

    const now = new Date();

    row.innerHTML = `
        <td>${name}</td>
        <td>${status}</td>
        <td>${now.toLocaleString()}</td>
    `;

    attendanceList.appendChild(row);

    document.getElementById("studentName").value="";
}
