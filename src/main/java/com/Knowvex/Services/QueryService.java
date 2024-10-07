package com.Knowvex.Services;

import com.Knowvex.Models.QueryModel;

import java.util.List;

public interface QueryService {

    boolean submitQuery(QueryModel query);

    boolean updateQuery(QueryModel query);

    List<QueryModel> getAllQuery();
}
