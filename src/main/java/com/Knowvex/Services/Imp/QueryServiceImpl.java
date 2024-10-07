package com.Knowvex.Services.Imp;
import com.Knowvex.Enums.QueryStatusEnum;
import com.Knowvex.Models.QueryModel;
import com.Knowvex.Repositories.QueryRepository;
import com.Knowvex.Services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QueryServiceImpl implements QueryService {

    @Autowired
    private QueryRepository queryRepository;

    @Override
    public boolean submitQuery(QueryModel query) {
        try {
            query.setStatus(QueryStatusEnum.PENDING);
            queryRepository.save(query);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateQuery(QueryModel query) {
        Optional<QueryModel> existingQuery = queryRepository.findById(query.getQueryId());
        if (existingQuery.isPresent()) {
            queryRepository.save(query);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<QueryModel> getAllQuery() {
        return queryRepository.findAll();
    }
}

