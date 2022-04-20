package TVS.Bike.Task1;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class BikeService
{
  @Autowired
  
  BikeRepository least;
  
  public Bike create(Bike bike)
  {
	  return least.save(bike);
  }
  
  public List<Bike> list()
  {
	  return (List<Bike>)least.findAll();
  }
  
  public Optional<Bike> read(int weak)
  {
	  return least.findById(weak);
  }
  
  public String remove (int key)
  {
    String nm=least.findById(key).orElse(new Bike()).getBikeModelName()+"has deleted";
    least.deleteById(key);
    return nm;
    
  }
   
}
