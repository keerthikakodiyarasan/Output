const resultsPanel = document.getElementById('resultsPanel');
const resultsBody = document.getElementById('resultsBody');
const emptyState = document.getElementById('emptyState');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const roleInput = document.getElementById('role');
const accessTypeSelect = document.getElementById('accessType');

const tableData = [
  { category: 'NRI', subcategory: 'Address Update', field: 'Address', access: 'No Access', mask: 'XXXX XXXX XXXX XXXX' },
  { category: 'NRI', subcategory: 'Address Update', field: 'Aadhaar Number', access: 'No Access', mask: 'XXXX XX XXXX XXXX' },
  { category: 'NRI', subcategory: 'Address Update', field: 'Account Number', access: 'No Access', mask: 'XXXX XXXX XXXX XXXX' },
  { category: 'NRI', subcategory: 'Address Update', field: 'Related Party', access: 'No Access', mask: 'XXXXXXXXX' },
  { category: 'Corporate', subcategory: 'Stop Check', field: 'Name', access: 'No Access', mask: 'XXXX XXXX XXXX' },
  { category: 'Corporate', subcategory: 'Stop Check', field: 'DOB', access: 'No Access', mask: 'XX-XX-XXXX' },
  { category: 'Corporate', subcategory: 'Stop Check', field: 'Aadhar Number', access: 'No Access', mask: 'XX XXXXXX XXXX' },
  { category: 'Corporate', subcategory: 'Stop Check', field: 'Phone Number', access: 'No Access', mask: 'XXXX XXXX XXXX' }
];

function showResults() {
  resultsBody.innerHTML = '';
  tableData.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.category}</td>
      <td>${row.subcategory}</td>
      <td>${row.field}</td>
      <td>${row.access}</td>
      <td>${row.mask}</td>
      <td class="table-actions">
        <span class="icon-circle" title="View">ℹ</span>
        <span class="icon-circle" title="Edit">✎</span>
      </td>
    `;
    resultsBody.appendChild(tr);
  });
  emptyState.classList.add('hidden');
  resultsPanel.classList.add('active');
}

function clearForm() {
  roleInput.value = '';
  accessTypeSelect.selectedIndex = 0;
  resultsBody.innerHTML = '';
  resultsPanel.classList.remove('active');
  emptyState.classList.remove('hidden');
}

searchBtn.addEventListener('click', showResults);
clearBtn.addEventListener('click', clearForm);
