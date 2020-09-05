import React from 'react';
import ProdutoService from '../../app/produtoService';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    success_msg: false
}

class CadastroProduto extends React.Component {

    state = estadoInicial

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name
        this.setState({[nomeCampo]: valor})
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor 
        }
       this.service.salvar(produto);
       this.clearFields();
       this.setState({success_msg: true}); 
    }

    clearFields = () =>{
        this.setState(estadoInicial);
    }

    render(){
        return(
            <div className="card mt-4">
                <div className="card-header">Cadastro de Produto</div>
                <div className="card-body">
                    {
                        this.state.success_msg ?
                        (
                            <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Salvo!</strong> Registro salvo com sucesso!
                        </div>
                        ):
                        (
                            <></>
                        )
                    }
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Nome: </label>
                                <input type="text" name="nome" value={this.state.nome} className="form-control" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>SKU: </label>
                                <input type="text" name="sku" value={this.state.sku} className="form-control" onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Descrição</label>
                                <textarea name="descricao" value={this.state.descricao} className="form-control" onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label>Preço: </label>
                                <input type="text" name="preco" value={this.state.preco} className="form-control" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Fornecedor: </label>
                                <input type="text" name="fornecedor" value={this.state.fornecedor} className="form-control" onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.clearFields}>Limpar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={this.onSubmit}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

export default CadastroProduto;