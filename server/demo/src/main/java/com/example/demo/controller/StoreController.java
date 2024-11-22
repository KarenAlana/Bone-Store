package com.example.demo.controller;

import com.example.demo.model.StoreModel;
import com.example.demo.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/produtos")
public class StoreController {

    @Autowired
    private StoreRepository acao;


@GetMapping("/status")
    public String status(){
    return "Status Ok";
}

@GetMapping()
    public List<StoreModel> getProdutos(){
    return acao.findAll();
}

@PostMapping
    public StoreModel salvarProduto(@RequestBody StoreModel produto){
    return acao.save(produto);
}

@PutMapping("/{id}")
public StoreModel atualizarProduto(@PathVariable String id, @RequestBody StoreModel produto){
    StoreModel produtoExistente = acao.findById(id).orElse(null);
    if (produtoExistente != null){
        produtoExistente.setQuantidade(produto.getQuantidade());
        return acao.save(produtoExistente);
    }
    return  null;
}

@DeleteMapping
    public  void removerTodosProdutos(){
    acao.deleteAll();
}

}
