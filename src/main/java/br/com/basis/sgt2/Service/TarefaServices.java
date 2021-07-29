package br.com.basis.sgt2.Service;


import br.com.basis.sgt2.Domain.Tarefa;
import br.com.basis.sgt2.Service.DTO.TarefaDTO;
import br.com.basis.sgt2.Service.MAP.TarefaMapper;
import br.com.basis.sgt2.repository.TarefasRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
@RequiredArgsConstructor
@Service
public class TarefaServices {

    private final TarefasRepository tarefasRepository;

    private final TarefaMapper tarefaMapper;

    public List<TarefaDTO> obterTodos() {

        return tarefaMapper.toDTO(tarefasRepository.findAll());
    }

    public TarefaDTO obterPorId(Long id) {
        Tarefa tarefa = tarefasRepository.findById(id).orElse(null);
        return tarefaMapper.toDTO(tarefa);
    }

    public TarefaDTO salvar(TarefaDTO tarefaDTO) {
        Tarefa tarefa = tarefaMapper.toEntity(tarefaDTO);
        Tarefa tarefaSalva = tarefasRepository.save(tarefa);
        return tarefaMapper.toDTO(tarefaSalva);
    }
    public TarefaDTO atualizar(TarefaDTO tarefaDTO){
        Tarefa tarefa = tarefaMapper.toEntity(tarefaDTO);
        Tarefa tarefaAtualizada = tarefasRepository.save(tarefa);
        return tarefaMapper.toDTO(tarefaAtualizada);
    }

    public void deletarPorId(Long id) {
        tarefasRepository.deleteById(id);
    }

}
