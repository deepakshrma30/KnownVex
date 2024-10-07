package com.Knowvex.Controllers;

import com.Knowvex.Models.QueryModel;
import com.Knowvex.Services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/queries")
@CrossOrigin("*")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping("/submit")
    public boolean submitQuery(@RequestBody QueryModel query) {
        return queryService.submitQuery(query);
    }

    @PutMapping("/update")
    public boolean updateQuery(@RequestBody QueryModel query) {
        return queryService.updateQuery(query);
    }

    @GetMapping("/all")
    public List<QueryModel> getAllQueries() {
        return queryService.getAllQuery();
    }
}
