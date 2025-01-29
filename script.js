document.addEventListener("DOMContentLoaded", function() { 
    let departmentsData = [];

    fetch("departments.json")
        .then(response => response.json())
        .then(data => {
            departmentsData = data.departments;

            document.querySelectorAll(".ch").forEach(div => {
                div.addEventListener("click", function(){
                    let departmentName = this.dataset.department; 
                    let department = departmentsData.find(dept => dept.name === departmentName);

                    if (department) {
                        document.getElementById("modalTitle").innerText = department.name;
                        document.getElementById("modalText").innerText = department.description;
                        document.getElementById("modalPrograms").innerText = "Programs: " + department.programs.join(", ");
                        document.getElementById("modalFaculty").innerText = "Faculty: " + department.faculty.join(", ");
                        document.getElementById("modalImage").src = "images/" + department.image; 
                        
                        document.getElementById("modal").style.right = "0"; 
                    }
                });
            });
        })
        .catch(error => console.error("Error loading JSON:", error));

    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("modal").style.right = "-100%"; 
    });
});


