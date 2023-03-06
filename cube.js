const baseModuleExports = {
  queryRewrite: (query, { securityContext }) => {
    // Used to return query without SecurityContext filtering for SQL API
    if (!securityContext.client_name) {
      throw new Error("No id found in Security Context!");
    }
    return query;
  },
}

module.exports = baseModuleExports;