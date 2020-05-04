package com.launchacademy.fluffandflame.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

@Data
@NoArgsConstructor
@Entity
@Table(name = "creature_types")
public class CreatureType {

  @Id
  @SequenceGenerator(name = "creature_type_generator", sequenceName = "creature_types_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "creature_type_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @NotBlank
  @Size(max = 100)
  @Column(name = "type")
  private String type;

  @Column(name = "description")
  private String description;

  @NotBlank
  @URL
  @Column(name = "img_url")
  private String imgUrl;
}
