const oscn = require('oscn-js');


let os = new oscn({api_key:"YOUR_API_KEY_GOES_HERE"});

const Query = {
    dockets(parent, args, context){
        return os.getDockets(args.county, args.case_number).then(res=> res.dockets);
    },
    events(parent, args, context){
        return os.getEvents(args.county, args.case_number).then(res=> res.events);
    },
    styles(parent, args, context){
        return os.getStyles(args.county, args.case_number).then(res=> res.style);
    },
    counts(parent, args, context){
        return os.getCounts(args.county, args.case_number).then(res=> res.counts);
    },
    parties(parent, args, context){
        return os.getParties(args.county, args.case_number).then(res=> res.parties);
    },
    attorneys(parent, args, context){
        return os.getAttorneys(args.county, args.case_number).then(res=> res.attorneys);
    },
    ocis_cases(parent, args, context){
        return os.getOcisCases(args.search_string).then(res => res);
    },
    elastic_search(parent, args, context){
        return os.elasticSearchCases(obj).then(res => res);
    }
}


module.exports = { Query };