var documenterSearchIndex = {"docs":
[{"location":"about/#About-1","page":"About","title":"About","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"This page contains some general information about this project, and recommendations about contributing.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Pages = [\"about.md\"]","category":"page"},{"location":"about/#Contributing-1","page":"About","title":"Contributing","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation, or propose new features.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Below some conventions that we follow when contributing to this package are detailed. For specific guidelines on documentation, see the Documentations Guidelines wiki.","category":"page"},{"location":"about/#Branches-and-pull-requests-(PR)-1","page":"About","title":"Branches and pull requests (PR)","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"We use a standard pull request policy: You work in a private branch and eventually add a pull request, which is then reviewed by other programmers and merged into the master branch.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Each pull request should be pushed in a new branch with the name of the author followed by a descriptive name, e.g., mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g., mforets/7.","category":"page"},{"location":"about/#Unit-testing-and-continuous-integration-(CI)-1","page":"About","title":"Unit testing and continuous integration (CI)","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"This project is synchronized with Travis CI such that each PR gets tested before merging (and the build is automatically triggered after each new commit). For the maintainability of this project, it is important to understand and fix the failing doctests if they exist.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"When you modify code in this package, you should make sure that all unit tests pass. To run the unit tests locally, you should do:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"$ julia --color=yes test/runtests.jl","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Alternatively, you can achieve the same from inside the REPL using the following command:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"julia> using Pkg\n\njulia> Pkg.test(\"RangeEnclosures\")","category":"page"},{"location":"about/#","page":"About","title":"About","text":"We also advise adding new unit tests when adding new features to ensure long-term support of your contributions.","category":"page"},{"location":"about/#Contributing-to-the-documentation-1","page":"About","title":"Contributing to the documentation","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"New functions and types should be documented according to our guidelines directly in the source code.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"You can view the source code documentation from inside the REPL by typing ? followed by the name of the type or function. For example, the following command will print the documentation of the enclose function:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"julia> ?enclose","category":"page"},{"location":"about/#","page":"About","title":"About","text":"This documentation you are currently reading is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. The sources for creating this documentation are found in docs/src. You can easily include the documentation that you wrote for your functions or types there (see the Documenter.jl guide or our sources for examples).","category":"page"},{"location":"about/#","page":"About","title":"About","text":"To generate the documentation locally, run make.jl, e.g., by executing the following command in the terminal:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"$ julia --color=yes docs/make.jl","category":"page"},{"location":"about/#Credits-1","page":"About","title":"Credits","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"These persons have contributed to RangeEnclosures.jl (in alphabetic order):","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Aadesh Deshmukh\nMarcelo Forets\nDaniel Freire","category":"page"},{"location":"lib/types/#Types-1","page":"Types","title":"Types","text":"","category":"section"},{"location":"lib/types/#","page":"Types","title":"Types","text":"This section describes systems types implemented in RangeEnclosures.jl.","category":"page"},{"location":"lib/types/#","page":"Types","title":"Types","text":"Pages = [\"types.md\"]\nDepth = 3","category":"page"},{"location":"lib/types/#","page":"Types","title":"Types","text":"CurrentModule = RangeEnclosures","category":"page"},{"location":"#RangeEnclosures.jl-1","page":"Home","title":"RangeEnclosures.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia package to compute range enclosures of real-valued functions.","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Computation of lower and upper bounds of real-valued functions, either univariate or multivariate, over hyperrectangular (i.e. box shaped) domains.\nThe following solvers are available:\nIntervalArithmetic from IntervalArithmetic.jl\nIntervalOptimisation from IntervalOptimisation.jl\nTaylorModels from TaylorModels.jl/\nSumOfSquares from SumOfSquares.jl\nThe following optional solvers are available:\nAffineArithmetic from AffineArithmetic.jl","category":"page"},{"location":"#Quickstart-1","page":"Home","title":"Quickstart","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The package exports one single function, enclose, which receives a Julia function, a domain, and (optionally) a solver and additional options passed to the solver. See the README.md file for the basic usage, or consult the source code docstrings, either in the REPL or in the github repository source code","category":"page"},{"location":"#Library-Outline-1","page":"Home","title":"Library Outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2","category":"page"},{"location":"lib/methods/#Methods-1","page":"Methods","title":"Methods","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"This section describes systems methods implemented in RangeEnclosures.jl.","category":"page"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"Pages = [\"methods.md\"]\nDepth = 3","category":"page"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"CurrentModule = RangeEnclosures","category":"page"},{"location":"lib/methods/#The-enclose-function-1","page":"Methods","title":"The enclose function","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"enclose","category":"page"},{"location":"lib/methods/#RangeEnclosures.enclose","page":"Methods","title":"RangeEnclosures.enclose","text":"enclose(f::Function, dom::Interval_or_IntervalBox,\n        solver::Symbol=:IntervalArithmetic; [kwargs]...)\n\nReturn a range enclosure of a univariate or multivariate function on the given domain.\n\nInput\n\nf      – function\ndom    – hyperrectangular domain, either a unidimensional  Interval or             a multidimensional IntervalBox\nsolver – (optional, default: IntervalArithmetic) choose one among the             available solvers; see RangeEnclosures.available_solvers for the             full list\nkwargs – optional keyword arguments passed to the solver; for available             options see the documentation of each solver\n\nOutput\n\nAn interval representing the range enclosure (minimum and maximum) of f over its domain dom.\n\nExamples\n\njulia> using RangeEnclosures\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1) # use default solver\n[0, 2]\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1, :IntervalArithmetic)\n[0, 2]\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1, :TaylorModels, order=4)\n[0.78125, 1.125]\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1, :TaylorModels, order=10)\n[0.8125, 1.09375]\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1, :IntervalOptimisation)\n[0.916034, 1.00213]\n\nYou can also try other solvers such as SumOfSquares and AffineArithmetic.\n\nA vector of solvers can be passed in the solver options. Then, the result is obtained by intersecting the range enclosure of each solver. In the previous example,\n\njulia> using RangeEnclosures\n\njulia> enclose(x -> 1 - x^4 + x^5, 0..1, [:TaylorModels, :IntervalArithmetic])\n[0.8125, 1.09375]\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Utility-functions-1","page":"Methods","title":"Utility functions","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"relative_precision","category":"page"},{"location":"lib/methods/#RangeEnclosures.relative_precision","page":"Methods","title":"RangeEnclosures.relative_precision","text":"relative_precision(x::Interval{N}, xref::Interval{N}) where {N}\n\nReturn the relative precision of an interval representing a range enclosure given a reference interval.\n\nInput\n\nx    – test interval\nxref – reference interval\n\nOutput\n\nAn interval containing the left (resp. right) percentages that describe the relative precision of x with respect to the reference interval xref.\n\nExamples\n\nSuppose that the reference interval is -12 46, and let -125 745 be the overapproximation of the reference interval obtained with some global optimisation method that returns a range enclosure. The relative precision is then:\n\njulia> using RangeEnclosures: relative_precision\n\njulia> xref = Interval(-1.2, 4.6)\n[-1.2, 4.6]\n\njulia> x = Interval(-1.25, 7.45)\n[-1.25, 7.45001]\n\njulia> relative_precision(x, xref)\n[0.862068, 49.138]\n\nNotice how the percentage of relative error of the maximum is big, close to 50, while the approximation of the minimum is much smaller, close to 1 of the reference value.\n\nAlgorithm\n\nThis function measures the relative precision of the result in a more informative way than taking the scalar overestimation because it evaluates the precision of the lower and the upper range bounds separately (cf. Eq. (20) in [1]).\n\n[1] Althoff, Matthias, Dmitry Grebenyuk, and Niklas Kochdumper.    Implementation of Taylor models in CORA 2018.    Proc. of the 5th International Workshop on Applied Verification for    Continuous and Hybrid Systems. 2018.\n\nNotes\n\nIt is assumed that the test, or paragon interval, is an overapproximation of the reference interval; otherwise the left or right percentages will be negative.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Enclosure-methods-1","page":"Methods","title":"Enclosure methods","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"enclose_IntervalArithmetic\nenclose_IntervalOptimisation\nenclose_TaylorModels\nenclose_SumOfSquares","category":"page"},{"location":"lib/methods/#RangeEnclosures.enclose_IntervalArithmetic","page":"Methods","title":"RangeEnclosures.enclose_IntervalArithmetic","text":"enclose_IntervalArithmetic(f::Function, dom::Interval_or_IntervalBox)\n\nCompute a range enclosure using interval arithmetic substitution.\n\nInput\n\nf   – function\ndom – hyperrectangular domain, either a unidimensional  Interval or          a multidimensional IntervalBox\n\nOutput\n\nAn interval representing the range enclosure (minimum and maximum) of f over its domain dom.\n\nAlgorithm\n\nThe result is obtained by substitution of dom on the function f and application of the rules of interval arithmetic.\n\nWe refer to the documentation and source code of IntervalArithmetic for details.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#RangeEnclosures.enclose_IntervalOptimisation","page":"Methods","title":"RangeEnclosures.enclose_IntervalOptimisation","text":"enclose_IntervalOptimisation(f::Function, dom::Interval_or_IntervalBox;\n                             structure=HeapedVector, tol=1e-3)\n\nCompute a range enclosure using interval optimisation.\n\nInput\n\nf         – function\ndom       – hyperrectangular domain, either a unidimensional  Interval or                a multidimensional IntervalBox\nstructure – (optional, default: HeapedVector) the way in which vector elements                are kept arranged; possible options are HeapedVector and SortedVector\ntol       – tolerance to which the optima are computed\n\nOutput\n\nAn interval representing the range enclosure (minimum and maximum) of f over its domain dom.\n\nAlgorithm\n\nThe solver finds the global minimum of the function f over the Interval or IntervalBox dom using the Moore-Skelboe algorithm. The method actually returns an interval containing the global minimum (resp. an interval containing the global maximum), as well as a list of boxes containing the minimisers (resp. maximisers); they can be obtained calling range_and_optimisers.\n\nThis function conservatively chooses the infimum (resp. supremum) over each interval.\n\nWe refer to the documentation and source code of IntervalOptimisation for details on the implemented methods.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#RangeEnclosures.enclose_TaylorModels","page":"Methods","title":"RangeEnclosures.enclose_TaylorModels","text":"enclose_TaylorModels(f::Function, dom::Interval_or_IntervalBox;\n                     order::Int=10, normalize::Bool=true)\n\nCompute a range enclosure using Taylor Models substitution.\n\nInput\n\nf         – function\ndom       – hyperrectangular domain, either a unidimensional  Interval or                a multidimensional IntervalBox\norder     – (optional, default: 10) order of the taylor model used to compute                an enclosure of f over dom\nnormalize – (optional, default: true) if true, normalize the taylor model                on the unit symmetric box around the origin\n\nOutput\n\nAn interval representing the range enclosure (minimum and maximum) of f over its domain dom.\n\nAlgorithm\n\nThe result is obtained by an evaluation of the function over Taylor model variables after recentering in the given domain and (optionally) normalizing in the symmetric -11^n domain.\n\nWe refer to the documentation and source code of TaylorModels for details.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#RangeEnclosures.enclose_SumOfSquares","page":"Methods","title":"RangeEnclosures.enclose_SumOfSquares","text":"enclose_SumOfSquares(f::Function, dom::Interval_or_IntervalBox,\n                     order::Int=5, backend=SDPA.Optimizer; kwargs...)\n\nCompute a range enclosure using sum-of-squares optimization.\n\nInput\n\nf       – function\ndom     – hyperrectangular domain, either a unidimensional Interval or              a multidimensional IntervalBox\norder   – (optional, default: 5) maximum degree of the SDP relaxation\nbackend – (optional, default: SDPA.Optimizer) the optimization backend              (aka JuMP solver)\nkwargs  – additional keyword arguments\n\nOutput\n\nAn interval representing the range enclosure (minimum and maximum) of f over its domain dom.\n\nAlgorithm\n\nThe range enclosure is computed using polynomial optimization methods. We refer to the documentation and examples of SumOfSquares.jl for details.\n\nNotes\n\nUse the backend keyword argument to pass an SDP solver backend of your choice; additional arguments to the solver can be passed in kwargs.\n\nFor instance, to use SDPA (default choice), use it as:\n\njulia> backend = SDPA.Optimizer\n\njulia> enclose_SumOfSquares(f, dom, order, backend=backend)\n...\n\nTo use MOSEK in non-verbose mode, let\n\njulia> using MosekTools\n\njulia> backend = MosekTools.Mosek.Optimizer;\n\njulia> enclose_SumOfSquares(f, dom, order, backend=backend, QUIET=true)\n...\n\nTo get the runtime, use MOI.get(model, MOI.SolveTime()).\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Specifics-to-interval-optimization-1","page":"Methods","title":"Specifics to interval optimization","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"range_and_optimisers","category":"page"},{"location":"lib/methods/#RangeEnclosures.range_and_optimisers","page":"Methods","title":"RangeEnclosures.range_and_optimisers","text":"range_and_optimisers(f::Function, dom::Interval_or_IntervalBox;\n                     structure=HeapedVector, tol=1e-3)\n\nReturn an interval that contains the global minimum (resp. an interval that contains the global maximum) of a univariate or multivariate function f, as well as a list of boxes containing the minimisers (resp. minimisers).\n\nInput\n\nf         – function\ndom       – hyperrectangular domain, either a unidimensional  Interval or                a multidimensional IntervalBox\nstructure – (optional, default: HeapedVector) the way in which vector elements                are kept arranged; possible options are HeapedVector and SortedVector\ntol       – tolerance to which the optima are computed\n\nOutput\n\nThe 4-tuple (global_min, minimisers, global_max, maximisers), where:\n\nglobal_min: interval that is guaranteed to contain the global minimum of f               over dom\nminimisers: list of boxes containing the minimisers of f over dom\nglobal_max: interval that is guaranteed to contain the global maximum of f               over dom\nmaximisers: list of boxes containing the maximisers of f over dom\n\nAlgorithm\n\nThe solver finds the global minimum of the function f over the Interval or IntervalBox dom using the Moore-Skelboe algorithm.\n\nWe refer to the documentation and source code of IntervalOptimisation for details.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Specifics-to-sum-of-squares-optimization-1","page":"Methods","title":"Specifics to sum-of-squares optimization","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"new_sos","category":"page"},{"location":"lib/methods/#RangeEnclosures.new_sos","page":"Methods","title":"RangeEnclosures.new_sos","text":"new_sos(backend; kwargs...)\n\nReturn a new (empty) sum-of-squares optimization problem for the given backend.\n\nInput\n\nbackend – the backend (also called JuMP solver)\nkwargs  – additional keyword arguments\n\nOutput\n\nAn instance of SOSModel for the given backend and options.\n\n\n\n\n\n","category":"function"}]
}
