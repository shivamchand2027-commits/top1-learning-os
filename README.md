# Top 1% Learning OS

A self-serve learning platform for consulting, strategy, finance, venture capital, AI, organizational work and case competitions.

**Website:** https://top1os.dev/

## Current curriculum

The prepared 13 November 2026 release covers 263 module IDs: 195 static kits and 68 modules in the AI, Thinking Patterns, Executive Communication, Investment Banking, Founder's Office, Organizational Strategy and Supply Chain arrays. It contains 2,590 MCQ items and 25 intentional self-check rubrics. A content count is not evidence of learner mastery.

The release adds exact-question-bound explanations and four option rationales for every MCQ. It retains all existing question stems and correct-key positions, repairs selected numerical distractors and overbroad objectives, improves selected distractors, including a parallel ten-item D241 revision, and fixes 34 malformed video assignments after title/channel identity checks. D103 adds finite APV/LBO written practice; D117 adds fitted linear-regression and future-batch practice. New worked exercises are self-assessed, not extra automatic quiz certifications.

## Application structure

- `index.html`: entry page, shared styling and script references.
- `app.js`: routing, login integration, progress behavior, lesson/quiz presentation and embedded AI lessons.
- `data/kits.js`: static module kits, loaded when needed.
- `data/modules.js`: additional curriculum arrays.
- Other `data/` and `img/` assets: library, books, case resources and visuals.
- `CNAME` on the release branch: `top1os.dev`.
- `Code.gs` and `appsscript.json` on main: legacy Apps Script material, not the current GitHub Pages deployment mechanism.

Authentication and progress use the existing Supabase integration. This release does not change those flows, database policies or saved learner state. Do not interpret this README as fresh verification of account isolation, synchronization or backend authorization.

## Deployment

GitHub Pages serves `/` from `top1-seo-listings-release`, not `main`. Preserve its `.nojekyll`, `CNAME`, supporting assets and domain settings. Keep the intended product files and release documentation mirrored on `main`, while preserving branch-specific legacy files.

Use an up-to-date normal Git checkout. Inspect changes, run syntax/data checks, commit and push without force. Verify the Pages build and the actual files delivered from https://top1os.dev/ before saying a release is live. A successful push alone does not establish deployment. A rollback should be an ordinary reviewed revert commit, not a forced branch reset.

## Native practice

D103 and D117 link an editable five-sheet workbook under `practice/`, with a PDF print view. It includes finite APV, a three-year LBO with cash/shortfall checks, linear OLS and a separate future-batch comparison, plus blank self-check response cells. The saved workbook was recalculated in LibreOffice against 26 numeric assertions and zero-variance, funding-gap and early-debt-payoff cases. All five PDF sheets were visually inspected. No macros or external data connections. Excel/Google Sheets parity and independent learner transfer were not tested.

## Verification and limits

The 13 November candidate passed isolated data/explanation checks for 2,590 positive renders, 2,590 changed-stem negatives, 2,590 changed-key negatives and 10,360 changed-option negatives. All 263 lesson objects match the prepared baseline plus recorded changes. Changed content was inspected with the existing visual styling at mobile and desktop widths. Additional APV/LBO/regression calculations were independently recomputed.

These are not account/learner-flow tests, complete audiovisual reviews, native-workbook execution or proof of learning transfer. Video metadata confirms identity only. Remaining quality and validation work is still open; this release is not a claim of 10/10 on every metric. Inline feedback increases the application payload; actual device and delivery performance need ongoing review.

## Licence

Proprietary. All rights reserved.

### D44 fund model

The D44 exercise links `practice/top1-d44-fund-practice.xlsx` and an eight-sheet PDF print view. The workbook models the fictional thirty-holding exit schedule, fees, paid/unpaid carry, NAV, net LP ratios, IRR snapshots and separate charts. LibreOffice recalculation passed 231 baseline numeric checks, ten downside checks, five zero-carry checks and two reserve checks plus undefined/suppression checks. This is authored execution evidence, not learner transfer, cross-application compatibility or real fund performance.

### D51 native cap-table/election lab - 13 November 2026
Editable seven-sheet `/practice/top1-d51-cap-table-practice.xlsx` and print PDF implement the existing fictional cap-binding SAFE/pool/A/B case. All16preference/conversion profiles are enumerated, allocated by seniority, and compared against unilateral deviations. Native LibreOffice passes47share/price +339baseline-table +452changed-exit +113restoration checks against an independent rational evaluator. Saved caches and all7PDFpages inspected. Original case/quiz retained. No account state, real instrument or legal advice; authored execution is not learner transfer or Excel/Sheets parity.

### D88 native linked-statements lab - 13 November 2026
Editable nine-sheet `/practice/top1-d88-statements-practice.xlsx` and print PDF implement the existing fictional no-bet and growth scenario case. Inputs, Calculations, Audit, Output, Sensitivity, Valuation, Registry and Failure log keep input lineage and decision limits visible. Native LibreOffice passes 113 baseline checks against an independent rational evaluator, 32 controlled-change checks, 113 checks with an inserted input row and 113 after restoration. Five invalid-input cases, a broken reference, zero revenue and invalid discount-rate edges were tested. Saved caches and all nine PDF sheets inspected. Unknown quality and dated liquidity remain unknown; the separate real/nominal NPV lab is not added to SME benefits. Original case/quiz retained. Authored execution is not learner transfer or Excel/Sheets parity.

### D52 native valuation indications - 13 November 2026
Seven-sheet `/practice/top1-d52-valuation-practice.xlsx` and PDF preserve the fictional conditional VC ceiling, current invented EV/ARR comps and separate operating DCF. Native LibreOffice passed 64 baseline, 25 controlled-change, 64 inserted-row and 64 restored checks against an independent rational evaluator, plus ten invalid-input cases and infeasible/zero-retention/negative-equity/reference edges. All print sheets inspected. No averaging of unlike methods; no real market claims, investment approval, learner-transfer or Excel/Sheets parity.

### D90 editable decision practice - 13 November 2026
Ten-slide PPTX, PDF and four-case CSV retain the synthetic D85/86/D88 case and D90 rubric. Delay of collections by 4 leaves revenue unchanged, takes cash 1.1 to -2.9, and separate rework 1.2 takes cash to -4.1. Forty-three rational-value/identity/scenario checks passed. Native tables/chart/notes retained; all ten rendered slides inspected. Day0/30/60/90 are fictional checkpoints, not real assignments. Endpoint gaps are not dated peak funding. No timed/spoken learner defence, recording review, real approval, PowerPoint/Slides parity or overall10/10 is claimed.

### D162 runnable synthetic portfolio lab - 13 November 2026
Prior authored model core packaged as standard-library Python,6-scenario paths/statistics,baseline bins/SVG and4-page PDF. Independent integer-sixths/rational-waterfall evaluator matched24,000path values,48strict threshold checks,36prior bins,12baseline references and budget/tie/constant/edge controls. Extracted ZIP regenerated all5outputs byte for byte. FourPDFpages and SVG inspected. Seed/draworder/follow-on pricing retained; original exercise and quiz preserved. No empirical forecast, real fund policy, independent learner transfer, fullAV or overall10/10 clearance.

### D162 source-reading calculation
Freshly read two assigned Kauffman articles and inspected29staticimages. Add mean-of-case-MOIC versus expected-cash/expected-capital checks from rounded source table:3.984 versus4.372222x and1.654 versus1.945x. Distinguish37.780043M chart threshold/43.5%exceedance from29.750M displayed allocation. Not a reproduced vendor engine or corrected unrounded output; original case/quiz and source/AV/learner limits retained.

### D247 full-paper reading lab
Added the public Edmondson1999fullpaper and a self-assessed methods/Table4-6/reverse-coding exercise. Distinguishes51team-level observations from427respondents; reporter-specific efficacy support, association versus causality, and source-internal count/ICC discrepancies. Synthetic arithmetic only; no real survey/diagnosis, fullTEDAV or learner/account clearance. Existing ten keyedMCQs unchanged.

### D248 historical handbook source lab
Complete public2012Valve handbook text read, material evaluation spreads and image-onlyFigure3-2caption inspected. Adds developmental feedback versus compensation ranking/source omissions and a synthetic pairwise-cycle/point-rule sensitivity exercise. Not Valve actual aggregation or personnel guidance. Existing tenMCQs unchanged; source/AV/learner/account limits retained.

### D249 validation-method source lab
Adds Sackett et al.2023 research discussion, sourceTable1/Figure1 and variability/correction reading; not the Google internal study. Correlation is not hiring accuracy; mean and credibility lower value change a toy decision; synthetic criterion-reliability sensitivity checked. No candidate data or real hiring actions. Existing tenMCQs/keys/options unchanged; broader source/AV/learner/account limits remain.

### D250 capability-claim source lab
Adds official2017chapter1and author2011article: nominated leaders/retrospective perceived capability,1.97versus2.1treatment ofreportsabove100percent,companies/countriesdiscrepancy preserved. Synthetic ratio-of-means versus mean-of-ratios/top-coding/leave-one-out arithmetic. Not actualdata/causaloutputreplication,fullbookorAV. Existing tenMCQs/keys/options unchanged;learner/accountlimitsretained.

### D251 published promotion-study source lab
Adds selected 2019 published-paper methods, Tables I-III, selection assumptions and counterfactual reading, distinct from the 2018 NBER 214-firm abstract. Covers units, significance stars, log-percentage approximation and incentive bounds, with a synthetic probability transfer check. Not a full paper/appendix, raw-data or audiovisual replication. Existing ten MCQs, keys and options unchanged; learner/account limits retained.

### D252 operations strategy fit and capacity uncertainty
Added complete-text readings of MIT 2010 lectures 2 (26 PDF pages) and 10 (12), with selected material diagrams/tables inspected. Cross-functional fit and decision categories support the fictional delivery promise. A separate nonmedical one-period capacity-loss exercise tests reversed underage/overage costs and same-mean demand uncertainty. This is not a current Genentech forecast, a purchase, a full-course/recording review or observed learner transfer. Existing ten MCQs, keys and options unchanged.

### D253-D254 queue variability and multi-resource allocation
D253 adds complete-text MIT 2002 lecture 8 and Modiano M/G/1 deck coverage, with core formula/diagram pixels checked. Distinguishes queue/system boundaries and tests identical means with different second moments, utilization and waits. D254 adds full-text Hajek 2014 conceptual review coverage and an authored two-resource counterexample with exhaustive integer checks, a separate dual bound, changed capacity and relevant-cost sensitivity. These are bounded self-checks, not operational commitments, empirical replication, recording review or observed learner transfer. Existing MCQs, keys and options unchanged.

### D255-D256 supported standardized work and attribute-chart evidence
D255 adds the complete 21-page LEI Shook ebook with selected forms and fixed-position-stop pixels, a fictional two-lane timing example, net-time takt and safe no-overlap/changed-demand cases. D256 adds NIST attribute and p-chart source text/chart plus exact-binomial known-p unequal-sample-size rules, boundary checks, cumulative false-alarm calculations and weighted pooling. Practitioner explanation and stipulated models are not empirical performance, worker monitoring, clinical implementation or learner evidence. Existing MCQs, keys and options unchanged.

### D257-D258 stochastic inventory and strategy economics
New full MIT D-Lab lecture 14 reading and material diagram checks support exact finite demand/protection-time and conditional newsvendor labs. D257 separates event versus unit service, review plus lead time, dependence and inventory position; it does not claim a steady replenishment simulation. D258 optimizes the baseline and signal policy, retains discrete ties and prices information/responsiveness under explicit fictional conditions. Prior Fisher/HBS source evidence reused, not recounted. Existing MCQs, keys and options unchanged; no real inventory, sourcing, learner/account or spending action.
