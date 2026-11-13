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

### D259-D260 order batching and network design
New full Management Science 1997 LPW mathematical paper and 37-page MIT Caplice network/hub lecture support exact finite batching moments and facility/flow feasibility labs. D259 checks independent random, synchronized and balanced ordering including a nondivisible retailer countercase. D260 checks fixed opening costs, service and capacity constraints, including infeasibility; source split-flow variable-count discrepancy is explicitly qualified. Prior cross-docking and ITF coverage reused, not recounted. Existing MCQs, keys and options unchanged; no real inventory, sourcing, learner/account or spending action.

### D261-D263 risk allocation, measurement uncertainty and SLO alerting
New full31page Ford risk author-manuscript, NIST confidence-interval subsection and official SRE workbook Alerting on SLOs chapter support exact fictional allocation, binomial-tail and minute-window labs. D261 distinguishes joint survival, weighted objectives and scenario-set normalization; D262 distinguishes one/two-sided zero-failure bounds without claiming a dabbawala audit; D263 checks burn rates, AND/OR reset and low-traffic source arithmetic. Prior completed source work reused, not recounted. Existing MCQs, keys and options unchanged; no real inventory, sourcing, learner/account or spending action.

### D72 editable cash-timing practice
Nine-sheet authored workbook retains original undated case and rubric, adds three explicitly invented A-only weekly-end timing schedules, reconciles direct/indirect cash, tests input failures and broken references, and labels quality/real authority unknown. Same ending cash -1.3 lakh gives peak draw1.3/5.5/7.05 depending on timing. Native recalculation plus saved caches/print pixels inspected; not learner performance or spreadsheet-app parity.

### D73-D74 denominator practice
Seven-sheet authored XLSX plus eight-page PDF retains 40 synthetic accounts and 13 completion ledger rows. Named stage rates, eligibility transfer, unit economics and invalid-input tests are natively recalculated. All artifacts fictional; no market validation, learner transfer or real outreach/payment permission. Original case/rubrics unchanged.

### D75-D76 decision and information practice
Seven-sheet XLSX/seven-page PDF keeps original already-net payoff and funding case. Probability sensitivity, constrained/unconstrained EVPI, invented imperfect-signal joint/posterior model, research cost and cash effects, and matrix points are tested separately. All assumptions fictional, no actual research/financing/learner transfer. Original cases/rubrics unchanged.

### D78-D79 climate and seed practice
Eleven-sheet XLSX/eleven-page PDF preserves twenty invented company/evidence rows, ownership and scenario-return formulas, fixed conditional bundle, reserve budget, climate counterfactuals and C01/C07 memo frames. Native changed-context tests retain evidence deferrals despite arithmetic passes. No actual company diligence, investment, learner transfer or emissions validation. Original cases/rubrics unchanged.

### D78-D79 source-depth extension
Publisher guidance sections2-4: potential/planned impact, annual sales versus recurring fleet, commercial forecasts, attribution and debated additionality. New exact three-year cohort teaching transfer compares dynamic/static baselines and retirement. No empirical/company/credit/learner validation; original cases/rubrics and native artifact retained.

### D80-D81 native objection and revision lab
Seven sheets/pages retain synthetic original cases and rubric. Dated cash and rework transfer, operating/receivables bridges, quality and invitation denominators, evidence/objection log, unknown B peak/quality and actual rights kept separate.75 cached formulas, no errors/external/macros. Authored native tests only, not learner mastery or real research/funding/permission.

### D82-D83 authored native board practice
Seven-sheet workbook and eight-slide editable packet preserve the original synthetic case and rubrics. Incremental operating/cash bridge, dated floor test, separate quality denominator, downside unknown timing, conditional thresholds and fictional review register.89 saved formulas, no errors/external/macros. Authored tests only, no actual timer, board/learner response, real rights or overall10/10.

### D84 authored mixed-transfer workbook
Ten-sheet editable lab preserves original synthetic case/rubric. Separate operating versus cash timing, independent climate and deal ownership models, blank actual attempts and future transfer prompts.104 cached formulas, zero errors/external/macros. Authored native tests only, not learner/delayed/Excel-Sheets parity or overall10/10.

### D84 authored paired-ic workbook
Nine-sheet editable lab preserves original synthetic case/rubric. Matched invest and pass/defer arguments, common-equity dilution and deal versus fund denominators, blank actual attempts and future transfer prompts.38 cached formulas, zero errors/external/macros. Authored native tests only, not learner/delayed/Excel-Sheets parity or overall10/10.

### D85/D86 authored board-practice artifacts
Original synthetic exercises/rubrics preserved. D85 has 15 editable slides, two native charts and claim/input/status notes. D86 has a 10-page editable answer-first memo, source register and eight-row decision/change log. Both retain conditional defer/redesign, matched alternatives, fictional review gates and UNKNOWN quality/dated peak funding/authority. Separate exact-rational arithmetic plus saved chart/native/PDF readback passed 83 checks; all 15 slides and 10 memo pages visually inspected. These are authored examples, not actual board distribution, learner completion, independent human signoff, full source/AV validation, cross-viewer parity or overall 10/10.

### D173/D175/D177 versioned statement practice
Original synthetic exercises/rubrics retained. Eleven editable sheets and matching PDF cover original statements, independent AR-only and stock-only corrections, source-to-cell impact, conditional memo, six invented skeptical-panel challenges and blank actual-learner evidence. Authored native execution tests 148 baseline cells, independent AR/stock/payable/COGS changes and restoration plus invalid/unbalanced/broken-reference failures. 148 saved caches have no errors; all 11 printed sheets visually inspected, intro clipping repaired. Cash 9/3/5, income 6 and assets 78; floor equality is not a breach. No real panel/audit/financing, learner validation, cross-viewer parity, full source/AV or overall 10/10.

### D174/D176 native capstone practice
Original synthetic exercises/rubrics retained. Nine-sheet execution memo/tracker and twelve-sheet equity/reserves workbook with matching PDFs, independent 39/58 baseline formula tests, changed-input/invalid/broken-reference checks and blank actual learner/reviewer results. Separate paths and conditional stage gates are not budget or investment approval. No learner/full source/full AV/cross-viewer/account validation or overall 10/10 claim.

### D71/D77/D89 native practice
Original synthetic cases and rubrics retained. Seven-sheet charter, eight-sheet independent operating/PV review and nine-sheet timed mock with matching PDFs. Native scenario/invalid/reference checks and independent arithmetic; actual learner/reviewer/timing fields remain blank or undefined. No real authority, learner/source/full AV/cross-viewer/account validation or overall 10/10 claim.

### D104/D105 native staged and mixed review
Twelve-sheet editable fictional stage/follow-on model plus separate debt maturity, terminal reinvestment and startup cases, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D106/D107 native market and response review
Twelve-sheet editable fictional inverse demand/supply, resource cost, ceiling allocation and recovery model, plus separate segmented midpoint elasticity and contribution cases, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D108/D109 native capacity and winner-selection review
Twelve-sheet editable fictional annual plant capacity, same-output costs and feasible thresholds, plus separate joint-state auction selection, conditional value, candidate downside and interval bounds, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D110/D111 native exact-growth and repricing review
Twelve-sheet editable fictional matched GDP/deflator/population ratios, separate retail contribution/thresholds and lender time-weighted repricing/NII/NIM/credit expense cases, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D112 native fresh mixed retrieval review
Twelve-sheet editable fictional policy-specific auction selection, exact macro ratios and lender repricing timing with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D113-D114 native quote and dated-equity review
Eleven-sheet fictional importer quote/tariff/contribution bridge and dated currency-consistent equity branches, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D115-D116 native Bayes and fixed-horizon review
Twelve-sheet fictional rare-event matrix/review-policy cost and fixed-horizon two-proportion inference/prospective planning, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D117-D118 native score and assignment review
Thirteen-sheet fictional locked score-bin calibration, Brier, classification cost, frozen later outcomes and separate assigned-user inference/guardrail/multiplicity, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D119-D120 native retrieval and counterfactual review
Twelve-sheet fictional fresh retrieval bins, assignment/exposure, seller difference-in-differences, net contribution, bias sensitivity and control-promotion adjustment, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D121 native frozen-forecast and censored-sales review
Twelve-sheet fictional rolling forecasts, past-only timestamp ledger, error metrics, cost-ranking reversal, dynamic cost tie and censored-demand unknowns, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D122 native signal-before-commitment review
Ten-sheet fictional joint probabilities, Bayes reversal, optimal foldback, gross EVSI/EVPI, net acquisition/delay gains and irrevocable-commitment counterexample, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D123 native prior and frozen forecast review
Ten-sheet fictional reference class and Bayes update, exact-duplicate evidence counterexample, frozen forecast ledger and binary versus two-coordinate Brier scoring, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D124 native corrected value and BATNA review
Ten-sheet fictional corrected ARR value bridge, comparable BATNA reservation ceiling, common sunk-cost invariance, information categories and unsent review draft, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D125 native portfolio denominator and substitute review
Ten-sheet fictional market growth and relative share, included-subsidiary overlap, externality/substitute sensitivity and subjective one-axis GE scoring;actual Titan placements unresolved, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D126 native cumulative pilot and targeted review
Twelve-sheet fresh fictional pilot tree, posterior foldback, ex-ante costs and negative-node sunk cost, signal-quality sensitivity and response-based cumulative review, with separate actual-error and delayed-transfer record, with matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D127 native VRIO comparative evidence
Eleven-sheet fictional routing economics, one-month NPV, replication horizon, bundle-not-interaction and evidence-status VRIO gates, with separately labelled dated company-reported ratio scope and unresolved source differences, matching PDF. Independent arithmetic and controlled native scenario/invalid/isolation/reference checks. Original written exercises retained; actual learner fields blank. No real financial authority, learner/source/full AV/cross-viewer/account clearance or overall 10/10 claim.

### D128 native new-demand proposal
Twelve-sheet fictional monthly cost bridge, own-product cannibalization, distinct fixed-count versus fixed-rate break-even, defined-category registry, strategy canvas and ERRC dependencies, matching PDF. Independently computed formulas and controlled scenario, invalid, isolation and broken-reference checks. Original exercise retained; actual observations and learner work blank. No real experiment, pricing, enrollment or spend authority; no full source/AV, independent learner, cross-viewer, account or overall 10/10 claim.

### D129 native repeated-game incentives
Ten-sheet fictional stage best responses, infinite perfect-observation grim test, finite known-horizon comparison, public false-alarm probabilities and separately evaluated noisy policy value, conditional signaling incentives, matching PDF. Independent formulas and controlled changes/invalid/isolation/reference checks. Original exercise retained; actual work blank. No real competitor coordination or signal, price/subsidy action or spend. No full source/AV, independent learner, cross-viewer, account or overall 10/10 claim.

### D130 native platform mechanisms
Eleven-sheet fictional completion difference-in-differences, contribution and break-even thresholds, opportunity-cost multihoming, distinct operator/app/bank roles, mechanism and policy-evidence ledger, matching PDF. Independent formulas and changed/invalid/isolation/reference checks. Original exercise retained; actual work blank. Selected NPCI consolidated scope retains pricing instruments; dated PIB summary not operative rate verification. No current fee/cap calculator, real payment data, experiment/contact/account/data-use change or spend. No full source/AV, independent learner, cross-viewer or overall 10/10 claim.

### D131 native disruption evidence
Ten-sheet fictional performance threshold/trajectory, first-cohort denominator, gross-margin versus operating result and incumbent hurdle, process/values-fit evidence lab, matching PDF. Independent formulas and changed/invalid/isolation/reference checks. Original exercise retained; actual work blank. Institute/RPV and dated taxi versus black-car interpretations plus independent criticism do not supply current company verdicts or predictive certainty. No restructuring, investment, acquisition, hiring, customer contact or spend. No full source/AV, independent learner, cross-viewer/account/legal or overall 10/10 claim.

### D132 resilience stress lab
Twelve-sheet fictional acquisition, customer-weighted CAC, monthly cash, closed causal loop and three-policy expected-cost/capacity lab. Thirteen-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no probability calibration, business continuity certification, supplier/campaign execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D133 resilience stress lab
Fourteen-sheet fictional changed-game, finite-horizon, noisy-policy and integrated-evidence review lab. Fifteen-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no probability calibration, business continuity certification, supplier/campaign execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D134 parenting and ownership lab
Ten-sheet fictional net-parenting, rival-owner, internal-transfer, contract and entry-price lab. Eleven-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no current-company verdict, tax advice or actual corporate execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D135 acquisition value and price lab
Eleven-sheet fictional operating/equity, control, synergy, whole-ceiling bid, delay and overlap lab. Twelve-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no current-company verdict, tax advice or actual corporate execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D136 decision boundaries and change lab
Ten-sheet fictional decision-boundary, adoption, service tradeoff and assumption-isolated follow-up lab. Eleven-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no current-company verdict, tax advice or actual corporate execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D137 governance evidence lab
Ten-sheet fictional cash, internal-receivable elimination, timeline and control-evidence lab. Eleven-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no current-company verdict, tax advice or actual corporate execution, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D138 segmentation economics lab
Ten-sheet fictional pilot economics, relative-search normalization, ADAMS and blank interview-design lab. Eleven-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, dataset download or nutrition advice, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D139 positioning and price economics lab
Eleven-sheet fictional positioning, four-cell frame-price economics, interaction and blank falsification protocol lab. Twelve-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, actual experiment or unsupported brand claim, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D140 integrated acquisition review lab
Ten-sheet fictional integrated acquisition review, terminal timing, enterprise-equity bridge, overlap/delay/demand/integration stresses and separate operating FCFF. Eleven-page PDF. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, actual experiment or unsupported brand claim, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D141 pricing, packages and perceptions lab
Ten-sheet fictional pricing/package/freemium arithmetic and six-row four-threshold perception counts with explicit boundary and invalid-row policies. Ten-page PDF. No demand curve or price optimum inferred. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, actual experiment or unsupported brand claim, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D142 channel acquisition and geo incrementality lab
Ten-sheet fictional channel acquisition cohort and separate geo incrementality lab. Eleven-page PDF. Proportional versus additive counterfactual assumptions, contribution-adjusted iROAS, scenario sensitivity and supplied endpoints (not computed confidence intervals). Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, actual experiment or unsupported brand claim, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D143 growth loops and finite cohorts lab
Eleven-sheet fictional growth loops and finite cohort lab. Twelve-page PDF. Discrete month-end contribution payback, monthly discounting, five new referral generations, distinct MRR/customer retention and activity populations. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual outreach, participants, quotes, commitments, actual experiment or unsupported brand claim, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D144 fund entities fees and terms lab
Twelve-sheet fictional fund entities, fees and terms lab. Twelve-page PDF. Separate voluntary/stipulated commitment, annual fee bases, after-all-cost capital-first waterfall and staged calls; eight negotiated term comparisons. No actual fund formation or legal applicability certification. Independently recomputed formulas, changed/invalid/isolation/reference tests; original exercise retained and actual work blank. Written source coverage bounded; no actual formation, solicitation, capital call, fee payment, commitments or legal certification, new account/spend, native cross-viewer, independent learner or overall 10/10 claim.

### D145 cash-capped preferred return and catch-up lab
Ten-sheet fictional waterfall lab/ten-page PDF: committed/paid/invested capital, cash-capped compound preference/full100percent GP catch-up, seven cash scenarios, separate early carry/ultimate entitlement/assumed recovery.79 baseline formulas independently recomputed,changed/boundary/invalid/reference checks.Original exercise retained/actual evidence blank.No actual distributions,legal/tax opinion,clawback demand,recovery,account or spend; no native cross-viewer/independent learner/overall10 claim.

### D146 manager evidence and investor reconciliation lab
Ten sheets/ten PDF pages: complete versus selected deal population, investor fees/paid carry/accrued carry bridge, markdown sensitivity and separate EV-equity/dilution toy.31 baseline formulas independently recomputed with changed/boundary/invalid/reference tests.Original exercise and quiz retained; actual evidence/permission/accepted-owner rows blank. No actual manager verdict,reference outreach,private disclosure,investment,account or spend. Full source/AV/native parity/independent learner/overall10 remain open.

### D147 contract bases and investor reconciliation lab
Eleven sheets/twelve PDF pages compare stipulated fee-included and fee-excluded waterfall bases with unchanged actual investor contributions, cash-capped catch-up, simplified net NAV roll and separate contribution-after-spend review.99 baseline formulas independently recomputed with changed/boundary/invalid/reference tests.Original questions/keys retained,actual evidence/permission/accepted-owner plan blank.No actual payout,contract opinion,investment,outreach,account or spend.Fullsource/AV/native parity/independent learner/overall10 remain open.

### D148 administrator reconciliation and notice review
Twelve sheets/thirteen PDF pages preserve original call allocation and add independent supplemental contribution/distribution/commitment-impact classifications, snapshot/bridge NAV and net investor multiples.41 baseline formulas independently recomputed;changed/boundary/invalid/reference tests.Explicit incomplete notice placeholders,no actual bankdetails,report,transfer,account or spend.D147 extension preference typo11.8114732 corrected to11.8114632;its workbook/formulas were already right.Original questions/keys retained.Fullsource/AV/nativeparity/independentlearner/overall10remainopen.

### D149 cross-border issue map and exchange arithmetic
Ten sheets/ten PDF pages retain original uniform ordinary-share exchange and add separate existing-holder and unequal-ratio sensitivities with fractional-entitlement flags.37baseline formulas independently recomputed;changed/boundary/invalid/reference tests.Two-page route map separates flows,holder-specific branches,rights/tax gaps and source bounds.Current-law application unscored;no real formation,filing,bank contact,transfer,account,investment or spend.Original questions/keys retained.Fullsource/AV/nativeparity/independentlearner/overall10remainopen.

### D150 sourcing score, coverage and cost lab
Eleven sheets/eleven PDF pages: fictional normalized scores distinguish missingness from zero, complete-label screening distinguishes precision and recall, and independent full-year cost comparison avoids ROI/job-saving claims.44 baseline formulas independently recomputed;22 changed sets/968 checks plus44 restored,eight boundaries/352,24 invalid/1056 family-isolation,six broken refs. Source and permissions architecture plus as-of/time-and-group validation plan;no scraping,API,data export,outreach,account,training,purchase or spend. Original questions/keys retained.Full source/AV/native parity/independent learner/overall10 remain open.

### D151 diligence evidence and selected-sample lab
Eleven sheets/eleven PDF pages separate uniform MRR and independently stipulated concentration cases,plus selected-sample/nonresponse arithmetic.23 baseline formulas independently recomputed;14 changed sets/322 checks plus23 restored,eight boundaries/184,20 invalid/460 family-isolation,six broken refs. Twelve draft open questions and blank contradiction/consent records. No interviews,quotes,contact,background checks,private disclosure,account,investment or spend. Original questions/keys retained.Full source/AV/native parity/independent learner/overall10 remain open.

### D152 diligence pipeline, cost and dependency lab
Twelve sheets/twelve PDF pages;25 baseline formulas independently recomputed;16 changed sets/400 checks plus25 restored,eight boundaries/200,20 invalid/500 isolation,six broken refs. Original pipeline and monthly contribution preserved;separate stage mix and fixed cost scenarios. Three one-page commercial/technical/legal notes;actual evidence/authority/accepted-owner blank. No company verdict,code access,security test,legal cure,account,investment or spend. Original keys retained.Full source/AV/native parity/independent learner/overall10 remain open.

### D153 cohort age, status and contribution lab
Eleven sheets/eleven PDF pages;174 baseline formulas independently recomputed;16changedsets/2784checks+174restored,eightboundaries/1392,20invalid/3480isolation,sixbrokenrefs. Fourteen age-aligned fictional cohorts,N/Afuture,exact-age rates,status-to-cost/sales bridge and observed-age3contribution/CAC. NotfullLTV/NRR/causal/realaccountingverdict. Actualevidence/authority/acceptedownerblank. Noactualbrand/customerdata,privateupload,accountor spend. Originalkeysretained.FullsourceAV/nativeparity/independentlearner/overall10remainopen.

### D154 discount cohort and fund-compartment lab
Ten sheets/ten PDF pages;54 baseline formulas independently recomputed;20changedsets/1080checks+54restored,eightboundaries/432,20invalid/1080isolation,sixbrokenrefs. Company contribution/CAC separately from independent fund call/NAV/snapshot;draft LPsummary/data-cut unsent. No actual LPletter/call/wire/contact/account/spend. Originalkeysretained.FullsourceAV/nativeparity/independentlearner/overall10remainopen.

### D155 forecast history and comparable scoring lab
Ten sheets/ten PDF pages;53 baseline formulas independently recomputed;20 changed sets/1060checks+53 restored,eight boundaries/424,20invalid/1060checks,sixbrokenrefs. Paired binary Brier/skill,unresolved/void eligibility,twenty blank journal slots and four blank reference notes. No actual forecasts,monitoring,outreach,account or spending. Original keys retained;fullsourceAV/nativeparity/independentlearner/overall10 remain open.

### D156 financing economics and instrument evidence lab
Twelve sheets/twelve PDF pages;59 baseline formulas independently recomputed;23 changed sets/1357 checks+59 restored,12 boundaries/708,20 invalid/1180,six broken refs. Three-round walk, pool ordering, conditional cap-binding toy, supplied-share price alternatives and simple note conversion. No actual financing,legal clearance,outreach,account or spend. Original keys retained;fullsourceAV/nativeparity/independentlearner/overall10 remain open.

### D157 joint-election exit waterfall lab
Eleven sheets/eleven PDF pages;181 baseline formulas independently recomputed;11 changed sets/1991 checks+181 restored,18 boundaries/3258,12 invalid/2172,six explicit exit-participation cases/1110 checks,six broken refs. All eight vectors, own-switch best responses,seniority,capped participation and residual redistribution. No actual exit,legal clearance,upload,account or spend. Original keys retained;fullsourceAV/nativeparity/independentlearner/overall10 remain open.

### D158 governance approvals lab
Ten sheets/ten PDF pages;27 baseline formulas independently recomputed;19 changed sets513checks,108 board attendance-vote sets2916checks plus8 process combinations216checks,50 preferred-mode sets1350checks,18 other boundaries486checks,42 invalid1134checks,six broken references. Quorum,votes,pooled vs separate consent,operational triggers and unknown legal approval remain distinct. No real resolution,contact,calendar,account or spend. Original keys retained;fullsourceAV/nativeparity/learner/legal/overall10 remain open.

### D159 term-sheet package lab
Ten sheets/ten PDF pages;41baseline formulas independently recomputed;10changedsets410checks+41restored,14boundaries574,23invalid943,two explicit endpoints102checks,six brokenreferences. Post/pre employee allocations,issued-common payout alternatives,sequential gains and separate weighted-average/fullratchet conversion model. No actual negotiation,agreement,legal review,signature,contact,generator/account or spend. Original keys retained;fullsourceAV/nativeparity/learner/currentlaw/overall10 remain open.

### D160 ESOP cash, vesting and secondary lab
Twelve sheets/PDF pages; 24 baseline formulas independently recomputed, 12 changed sets 288 checks plus 24 restored, 21 boundaries 504, 38 invalid 912 and six broken references. Stipulated 30% collection is not an actual tax rate; losses retained without automatic salary-tax refund. Existing-share secondary leaves issued count unchanged and company primary cash zero. Selected current Indian tax/RBI text qualified, not employee case clearance. No actual exercise, transfer, buyback, loan, notice, filing, advice, account or spend. Original keys retained; full source/AV, native parity, learner and overall 10 remain open.

### D161 downside recap and negotiated alternatives
Twelve-sheet/PDF fictional joint-election calculator. 181 baseline formulas independently recomputed; changed, boundary, invalid, rights-exit and separate/combined counterfactual tests. Forced B is a negotiated feasible-choice assumption, not voluntary acceptance. Common gains must be re-solved, not added. No actual employee entitlement, vote, legal clearance, transaction, account or spend. Native parity, learner/full source AV and overall 10 remain open.
