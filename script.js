/* script.js */

// --- Data Management ---
const DB = {
  get: (key) => JSON.parse(localStorage.getItem(key) || "[]"),
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
};

// --- Seed Data ---
if (DB.get("blueprints").length === 0) {
  DB.set("blueprints", [
    { 
        id: 1, 
        name: "Employment Agreement", 
        description: "Standard employment contract template",
        createdDate: "Jan 17, 2026",
        fields: [
            { id: 1, label: "Employee Name", type: "text" }, 
            { id: 2, label: "Position", type: "text" },
            { id: 3, label: "Start Date", type: "date" },
            { id: 4, label: "Employee Signature", type: "signature" }
        ] 
    }
  ]);
}

// --- Blueprint Logic ---
function saveBlueprint(name, description, fields) {
  const bps = DB.get("blueprints");
  
  // Create Date string
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('en-US', dateOptions);

  bps.push({ 
      id: Date.now(), 
      name, 
      description: description || "No description provided", 
      createdDate: dateStr,
      fields 
  });
  DB.set("blueprints", bps);
  window.location.href = "blueprints.html";
}

function deleteBlueprint(id) {
    if(confirm("Are you sure you want to delete this blueprint?")) {
        const bps = DB.get("blueprints");
        const newBps = bps.filter(b => b.id !== id);
        DB.set("blueprints", newBps);
        window.location.reload();
    }
}

// --- Contract Logic ---
function createContract(blueprintId, customName) {
  const bps = DB.get("blueprints");
  const bp = bps.find(b => b.id == blueprintId);
  const contracts = DB.get("contracts");
  
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString('en-US', dateOptions);

  const newContract = {
    id: Math.floor(Math.random() * 10000),
    clientName: customName, 
    blueprintName: bp.name,
    status: "Created",
    createdDate: dateStr,
    fields: bp.fields.map(f => ({ ...f, value: "" }))
  };
  
  contracts.push(newContract);
  DB.set("contracts", contracts);
  window.location.href = "index.html";
}

function updateContractStatus(id, newStatus) {
  const contracts = DB.get("contracts");
  const idx = contracts.findIndex(c => c.id == id);
  if (idx !== -1) {
    contracts[idx].status = newStatus;
    DB.set("contracts", contracts);
    window.location.reload();
  }
}