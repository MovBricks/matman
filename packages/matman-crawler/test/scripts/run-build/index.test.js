import path from 'path';
import { expect } from 'chai';
import fse from 'fs-extra';
import glob from 'glob';
import { build } from '../../../src';
import CrawlerParser from '../../../src/model/CrawlerParser';
import { findMatmanConfig } from '../../../../matman/src/util';

describe('check build()', () => {
    const rootPath = path.join(__dirname, '../../data/fixtures/demo1');
    const tmpCrawlerBuildPath = path.join(__dirname, '../../data/tmp/demo1_build');

    const crawlerParser = new CrawlerParser(findMatmanConfig(rootPath, {
        crawlerBuildPath: tmpCrawlerBuildPath
    }));

    before(() => {
        fse.removeSync(tmpCrawlerBuildPath);

        return build(crawlerParser.matmanConfig);
    });

    after(() => {
        fse.removeSync(tmpCrawlerBuildPath);
    });

    it('build for 5 crawler script', () => {
        const globResult = glob.sync(path.resolve(tmpCrawlerBuildPath, './**/**.js'));

        expect(globResult).to.have.members([
            path.join(tmpCrawlerBuildPath, 'crawlers/c1.js'),
            path.join(tmpCrawlerBuildPath, 'crawlers/c2.js'),
            path.join(tmpCrawlerBuildPath, 'p1/crawlers/c1.js'),
            path.join(tmpCrawlerBuildPath, 'p1/crawlers/p11.js'),
            path.join(tmpCrawlerBuildPath, 'p1/crawlers/p12.js')
        ]);
    });

    it('check webpack-config entry', () => {
        const config = require(path.join(tmpCrawlerBuildPath, 'webpack-config'));
        const testerPath = path.join(rootPath, './src/testers');

        expect(config.entry).to.eql({
            'crawlers/c1': path.join(testerPath, 'crawlers/c1.js'),
            'crawlers/c2': path.join(testerPath, 'crawlers/c2.js'),
            'p1/crawlers/c1': path.join(testerPath, 'p1/crawlers/c1.js'),
            'p1/crawlers/p11': path.join(testerPath, 'p1/crawlers/p11.js'),
            'p1/crawlers/p12': path.join(testerPath, 'p1/crawlers/p12.js')
        });
    });

    it('check webpack-config output', () => {
        const config = require(path.join(tmpCrawlerBuildPath, 'webpack-config'));

        expect(config.output.filename).to.equal('[name].js');
        expect(config.output.path).to.equal(tmpCrawlerBuildPath);
    });

});

