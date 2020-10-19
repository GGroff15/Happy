const Database = require('./db'); // recebe o objeto database criado no arquivo db.js
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // Inserir dados na tabela

    await saveOrphanage(db, { 
        lat: "-23.5308492",
        lng: "-46.7866366",
        name: "Lar d0s Menin0s",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social",
        images: ["https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1562790519-ee271a69b149?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });



    // // Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages"); // Consulta todos os dados da tabela
    console.log(selectedOrphanages);



    // // Deletar dado da tabela
    // console.log(await db.run(`DELETE FROM orphanages WHERE id="4"`))
});