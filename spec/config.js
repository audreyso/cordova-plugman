var config = require('../src/config'),
    registry = require('../src/registry/registry');

describe('config', function() {
    it('should run config', function() {
        var sConfig = spyOn(registry, 'config');
        config(function(err, result) { });
        expect(sConfig).toHaveBeenCalledWith(jasmine.any(Function));
    });
});
