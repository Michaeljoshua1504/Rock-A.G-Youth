const namesContainer = document.getElementById('names');
const prevButton = document.getElementById('prevButton');
const scrollButton = document.getElementById('scrollButton');
const totalCountElement = document.getElementById('totalCount');

const names = [
    "Rakesh", "Redi", "Sudheer", "Rahul", "Sunny", "Deva", "Guru", "Vinay", "Oshi", "Pandu",
    "Sudheer", "Raja", "Yesu Raju", "Ajay", "Jeevan", "Emanuel", "Ravi Kiran", "Shohan", "Shahan",
    "Naga babu", "Nikhil", "Narendra", "Vamsi", "Manikanta", "Naveen", "Kranthi Paul", "Keerthi Paul",
    "Jeevan", "Immanuel", "Karthik", "Rakesh", "Vandanam", "Ammulu", "Nani", "Chandu", "Joshitha",
    "Shylu", "Pallavi", "Tharuni", "Guravayya", "Sunny", "Rahul", "Divya", "Swamy", "Hema", "Navya",
    "Deepthi", "Shalem", "Sharon", "David", "Vinay", "Prem", "Vijay", "Ammulu", "Navadeep", "Hoshiah",
    "Pandu", "Renuka", "Anil", "Joseph", "Charan", "Pandu", "Kavya", "Chandu", "Mahesh", "Michel Joshua",
    "Venkatesh", "Keerthi", "Anil", "Shalem", "Keerthi", "Thamsi", "Sudheer", "Chandu", "Vinni", "Prasanth", "Priskilla"
];

let currentIndex = 0;

function createName() {
    const nameElement = document.createElement('p');
    const serialNumber = currentIndex + 1;
    nameElement.textContent = `${serialNumber}. ${names[currentIndex]}`;
    namesContainer.innerHTML = '';
    namesContainer.appendChild(nameElement);

    updateTotalCount(); // Update the total count after creating the name
}

function updateTotalCount() {
    const totalCount = names.length;
    totalCountElement.textContent = `Total: ${totalCount} people`;
}

function scrollNext() {
    if (currentIndex < names.length - 1) {
        currentIndex += 1;
        updateButtonsState();
        createName();
    }
}

function scrollPrev() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateButtonsState();
        createName();
    }
}

function updateButtonsState() {
    scrollButton.disabled = currentIndex === names.length - 1;
    prevButton.disabled = currentIndex === 0;
}

createName();

scrollButton.addEventListener('click', scrollNext);
prevButton.addEventListener('click', scrollPrev);