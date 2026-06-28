const usuarios = [];
let proximoId = 1;

function adicionarUsuario(nome, email) {
  if (!nome || !email) {
    console.log("Erro: nome e email são obrigatórios.");
    return null;
  }
  if (buscarUsuarioPorEmail(email)) {
    console.log(`Email já cadastrado: ${email}`);
    return null;
  }
  const usuario = { id: proximoId++, nome, email };
  usuarios.push(usuario);
  return usuario;
}

function buscarUsuarioPorEmail(email) {
  return usuarios.find(u => u.email === email) || null;
}

function buscarUsuarioPorNome(nome) {
  return usuarios.filter(u =>
    u.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

function listarUsuarios() {
  if (usuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }
  usuarios.forEach(u => console.log(`[${u.id}] ${u.nome} — ${u.email}`));
}

function removerUsuario(email) {
  const index = usuarios.findIndex(u => u.email === email);
  if (index === -1) {
    console.log("Usuário não encontrado.");
    return false;
  }
  usuarios.splice(index, 1);
  return true;
}

// --- CLI ---
console.log("=== Sistema de Usuários ===\n");

console.log(">> Adicionando usuários...");
console.log(adicionarUsuario("Ana Lima",    "ana@email.com"));
console.log(adicionarUsuario("Bruno Melo",  "bruno@email.com"));
console.log(adicionarUsuario("Carla Souza", "carla@email.com"));

console.log("\n>> Listando todos os usuários:");
listarUsuarios();

console.log("\n>> Tentando adicionar email duplicado:");
console.log(adicionarUsuario("Ana Duplicada", "ana@email.com"));

console.log("\n>> Buscando por email:");
console.log(buscarUsuarioPorEmail("bruno@email.com"));
console.log(buscarUsuarioPorEmail("naoexiste@email.com"));

console.log("\n>> Buscando por nome (parcial, case-insensitive):");
console.log(buscarUsuarioPorNome("ana"));
console.log(buscarUsuarioPorNome("MELO"));
console.log(buscarUsuarioPorNome("xyz"));

console.log("\n>> Removendo Bruno:");
console.log(removerUsuario("bruno@email.com"));

console.log("\n>> Lista final:");
listarUsuarios();