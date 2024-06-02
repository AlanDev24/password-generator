export const generator = (e) => {
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { char, nmb, size, up } = formJson;

    const words = [
        "conetur", "ading", "incidunt", "eation",
        "ullco", "consuat", "reperit", "voluate", 
        "cutat", "prnt", "perstis", "volutem",
        "accusm", "laudium", "invtore", "veriis", 
        "arcecto", "explbo", "asptur", "contur", 
        "votem", "rae", "nesnt", "exernem", 
        "labom", "molae", "recdae", "dolm", 
        "voluus", "necsus"
    ];
    const special = [
        "!", "_", "-", "@",
        "%", "$", "#", "<", ">"
    ];

    let password = words[Math.floor(Math.random() * words.length)];
    let newPassword = '' + password;

    if (up == 'on') {
        let uppercase = password[0].toUpperCase();
        newPassword = uppercase + password.slice(1); // Actualizar newPassword correctamente
    }
    if (nmb == 'on') {
        newPassword += Math.floor(Math.random() * 522);
    }
    if (char == 'on') {
        newPassword += special[Math.floor(Math.random() * special.length)];
    }

    let passwordSlice = newPassword.slice(0, parseInt(size));
    do {
        passwordSlice += words[Math.floor(Math.random() * words.length)];
    } while (passwordSlice.length < size);

    return passwordSlice.slice(0, size); // Asegurar que la longitud final no exceda el tamaño especificado
}