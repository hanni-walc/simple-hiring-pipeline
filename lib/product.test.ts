import { describe, expect, it } from 'vitest';
import {
  buildCandidatePipeline,
  buildHiringDashboard,
  buildJobScorecard,
  sampleCandidates,
  sampleJobs,
  sampleInterviews,
} from './product';

describe('buildHiringDashboard', () => {
  it('summarizes hiring in a way a non-recruiter can use', () => {
    const dashboard = buildHiringDashboard(sampleJobs, sampleCandidates, sampleInterviews);

    expect(dashboard.openRoles).toBeGreaterThan(0);
    expect(dashboard.nextAction).toContain('candidate');
    expect(dashboard.health).toBe('moving');
  });
});

describe('buildCandidatePipeline', () => {
  it('sorts candidates by stage and score', () => {
    const pipeline = buildCandidatePipeline(sampleCandidates);

    expect(pipeline[0].stage).toBe('offer');
    expect(pipeline[0].candidateName).toContain('Avery');
    expect(pipeline[0].summary).toContain('score');
  });
});

describe('buildJobScorecard', () => {
  it('turns a job into a shareable scorecard snapshot', () => {
    const scorecard = buildJobScorecard(sampleJobs[0], sampleCandidates);

    expect(scorecard.title).toContain(sampleJobs[0].title);
    expect(scorecard.hiringManager).toContain('manager');
    expect(scorecard.topSignals.length).toBeGreaterThan(0);
  });
});
