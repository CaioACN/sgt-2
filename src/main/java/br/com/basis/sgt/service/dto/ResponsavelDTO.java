package br.com.basis.sgt.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponsavelDTO {

    private Long id;
    private String setor;


    public void setId(Long id) {
    }
}