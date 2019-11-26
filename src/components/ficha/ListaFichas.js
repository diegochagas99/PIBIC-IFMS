/*
recuperaFichas = () => {
        database.ref('fichas').once('value').then(
            snapshot => {
                const valor = snapshot.val();
                if(valor){
                    const chaves = Object.keys(valor);
                    let fichas = [];
                    chaves.map(chave => fichas.push({ id:chave, valor:valor[chave].nome }));
                    this.setState({ fichas });
                }
            },
            erro => console.log(erro)
        );
    }
    */