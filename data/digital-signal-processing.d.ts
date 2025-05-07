export const questions = [
  {
    question: "What is the primary function of Digital Signal Processing (DSP)?",
    options: [
      "To convert analog signals to digital signals",
      "To generate analog signals from digital signals",
      "To analyze and manipulate digital signals",
      "To amplify analog signals"
    ],
    correctOption: "To analyze and manipulate digital signals",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a basic building block in DSP systems?",
    options: [
      "Oscillator",
      "Amplifier",
      "Transistor",
      "Filter"
    ],
    correctOption: "Filter",
    difficulty: "beginner"
  },
  {
    question: "What does the acronym 'ADC' stand for in DSP?",
    options: [
      "Digital-to-Analog Converter",
      "Adaptive Digital Control",
      "Analog-to-Digital Converter",
      "Advanced Digital Circuit"
    ],
    correctOption: "Analog-to-Digital Converter",
    difficulty: "beginner"
  },
  {
    question: "What is the unit of frequency in the context of DSP?",
    options: [
      "Amperes",
      "Volts",
      "Seconds",
      "Hertz"
    ],
    correctOption: "Hertz",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a common type of digital filter?",
    options: [
      "RC Filter",
      "Crystal Filter",
      "FIR Filter",
      "LC Filter"
    ],
    correctOption: "FIR Filter",
    difficulty: "beginner"
  },
  {
    question: "What is the process of converting a continuous-time signal into a discrete-time signal called?",
    options: [
      "Filtering",
      "Sampling",
      "Modulation",
      "Quantization"
    ],
    correctOption: "Sampling",
    difficulty: "beginner"
  },
  {
    question: "What does the Nyquist-Shannon sampling theorem state?",
    options: [
      "The sampling rate must be less than half the highest frequency component of the signal.",
      "The sampling rate must be equal to the highest frequency component of the signal.",
      "The sampling rate must be at least twice the highest frequency component of the signal.",
      "The sampling rate is independent of the signal's frequency content."
    ],
    correctOption: "The sampling rate must be at least twice the highest frequency component of the signal.",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a characteristic of a digital signal?",
    options: [
      "Analog values",
      "Infinite bandwidth",
      "Discrete time",
      "Continuous amplitude"
    ],
    correctOption: "Discrete time",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of a Digital-to-Analog Converter (DAC)?",
    options: [
      "To filter analog signals",
      "To convert analog signals to digital signals",
      "To convert digital signals to analog signals",
      "To amplify digital signals"
    ],
    correctOption: "To convert digital signals to analog signals",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a common application of DSP?",
    options: [
      "Power generation",
      "Analog communication",
      "Optical communication",
      "Audio processing"
    ],
    correctOption: "Audio processing",
    difficulty: "beginner"
  },
  {
    question: "What is the Z-transform used for in DSP?",
    options: [
      "Designing analog filters",
      "Analyzing discrete-time systems",
      "Analyzing continuous-time signals",
      "Modulating signals"
    ],
    correctOption: "Analyzing discrete-time systems",
    difficulty: "intermediate"
  },
  {
    question: "What is the difference between FIR and IIR filters?",
    options: [
      "FIR filters are non-recursive, IIR filters are recursive",
      "IIR filters have feedback, FIR filters do not",
      "Both b and c",
      "FIR filters have feedback, IIR filters do not"
    ],
    correctOption: "Both b and c",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a windowing technique used in FIR filter design?",
    options: [
      "Rectangular window",
      "All of the above",
      "Gaussian window",
      "Hamming window"
    ],
    correctOption: "All of the above",
    difficulty: "intermediate"
  },
  {
    question: "What is the Discrete Fourier Transform (DFT)?",
    options: [
      "A transform used to analyze discrete-time signals",
      "A transform used to analyze continuous-time signals",
      "A method for signal amplification",
      "A type of analog filter"
    ],
    correctOption: "A transform used to analyze discrete-time signals",
    difficulty: "intermediate"
  },
  {
    question: "What is the Fast Fourier Transform (FFT)?",
    options: [
      "A type of analog filter",
      "An efficient algorithm for computing the DFT",
      "A method for signal modulation",
      "A slower version of the DFT"
    ],
    correctOption: "An efficient algorithm for computing the DFT",
    difficulty: "intermediate"
  },
  {
    question: "What is the process of increasing the sampling rate of a signal called?",
    options: [
      "Quantization",
      "Decimation",
      "Interpolation",
      "Aliasing"
    ],
    correctOption: "Interpolation",
    difficulty: "intermediate"
  },
  {
    question: "What is the process of decreasing the sampling rate of a signal called?",
    options: [
      "Interpolation",
      "Aliasing",
      "Quantization",
      "Decimation"
    ],
    correctOption: "Decimation",
    difficulty: "intermediate"
  },
  {
    question: "What is aliasing in DSP?",
    options: [
      "The process of converting analog signals to digital signals",
      "The process of amplifying signals",
      "The distortion of a signal due to insufficient sampling rate",
      "The process of filtering high-frequency components"
    ],
    correctOption: "The distortion of a signal due to insufficient sampling rate",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of an ideal low-pass filter?",
    options: [
      "Blocks all frequencies",
      "Passes frequencies below the cutoff frequency and blocks frequencies above it",
      "Passes all frequencies",
      "Passes frequencies above the cutoff frequency and blocks frequencies below it"
    ],
    correctOption: "Passes frequencies below the cutoff frequency and blocks frequencies above it",
    difficulty: "intermediate"
  },
  {
    question: "What is group delay in the context of filters?",
    options: [
      "The maximum delay of the signal",
      "The delay of the signal phase",
      "The delay of the signal amplitude",
      "The average delay of the signal"
    ],
    correctOption: "The delay of the signal phase",
    difficulty: "intermediate"
  },
  {
    question: "What is the order of a filter?",
    options: [
      "The cutoff frequency of the filter",
      "The gain of the filter",
      "The number of taps in the filter",
      "The number of poles in the filter's transfer function"
    ],
    correctOption: "The number of poles in the filter's transfer function",
    difficulty: "advanced"
  },
  {
    question: "What is a polyphase filter?",
    options: [
      "A filter designed using multiple phases of the input signal",
      "A filter with multiple phases",
      "A filter used for phase modulation",
      "A filter with a constant phase response"
    ],
    correctOption: "A filter designed using multiple phases of the input signal",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the Parks-McClellan algorithm?",
    options: [
      "To analyze signal spectra",
      "To design IIR filters",
      "To perform convolution",
      "To design FIR filters"
    ],
    correctOption: "To design FIR filters",
    difficulty: "advanced"
  },
  {
    question: "What is the relationship between the Z-transform and the Discrete-Time Fourier Transform (DTFT)?",
    options: [
      "They are completely unrelated transforms.",
      "The Z-transform is a special case of the DTFT evaluated on the unit circle.",
      "They are both used for analog signal analysis.",
      "The DTFT is a special case of the Z-transform evaluated on the unit circle."
    ],
    correctOption: "The DTFT is a special case of the Z-transform evaluated on the unit circle.",
    difficulty: "advanced"
  },
  {
    question: "What is the meaning of 'BIBO stability' in the context of DSP systems?",
    options: [
      "Basic Input, Basic Output stability",
      "Big Input, Big Output stability",
      "Bounded Input, Bounded Output stability",
      "Best Input, Best Output stability"
    ],
    correctOption: "Bounded Input, Bounded Output stability",
    difficulty: "advanced"
  },
  {
    question: "What is the function of a Hilbert transformer?",
    options: [
      "To perform Fourier transforms",
      "To design analog filters",
      "To modulate signals",
      "To calculate the Hilbert transform of a signal"
    ],
    correctOption: "To calculate the Hilbert transform of a signal",
    difficulty: "advanced"
  },
  {
    question: "What is spectral leakage in DFT analysis?",
    options: [
      "The spreading of frequency components due to windowing",
      "The leakage of signal amplitude",
      "The loss of high-frequency components",
      "The introduction of noise in the spectrum"
    ],
    correctOption: "The spreading of frequency components due to windowing",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of a pre-warping transformation in IIR filter design?",
    options: [
      "To simplify filter design calculations",
      "To pre-amplify the signal before filtering",
      "To compensate for the non-linear frequency warping of the bilinear transform",
      "To reduce aliasing effects"
    ],
    correctOption: "To compensate for the non-linear frequency warping of the bilinear transform",
    difficulty: "advanced"
  },
  {
    question: "What is the role of adaptive filters in DSP?",
    options: [
      "To convert analog signals to digital signals",
      "To filter signals with fixed characteristics",
      "To filter signals with time-varying characteristics",
      "To amplify signals"
    ],
    correctOption: "To filter signals with time-varying characteristics",
    difficulty: "advanced"
  },
  {
    question: "What is the Welch method used for?",
    options: [
      "Designing FIR filters",
      "Performing convolution",
      "Estimating power spectral density",
      "Calculating the Z-transform"
    ],
    correctOption: "Estimating power spectral density",
    difficulty: "advanced"
  },
  {
    question: "What is the fundamental difference between discrete-time and continuous-time signals?",
    options: [
      "Discrete-time signals have continuous amplitudes, while continuous-time signals have discrete amplitudes.",
      "Discrete-time signals are always periodic, while continuous-time signals are not.",
      "Discrete-time signals are defined only at discrete moments in time, while continuous-time signals are defined for all times.",
      "Discrete-time signals have finite energy, while continuous-time signals have infinite energy."
    ],
    correctOption: "Discrete-time signals are defined only at discrete moments in time, while continuous-time signals are defined for all times.",
    difficulty: "beginner"
  },
  {
    question: "Which mathematical operation is fundamental to DSP and is used to combine two signals?",
    options: [
      "Convolution",
      "Differentiation",
      "Multiplication",
      "Integration"
    ],
    correctOption: "Convolution",
    difficulty: "beginner"
  },
  {
    question: "In the context of DSP, what does 'LTI system' stand for?",
    options: [
      "Linear Time-Variant system",
      "Linear Time-Invariant system",
      "Low-frequency Time-Invariant system",
      "Logarithmic Time-Independent system"
    ],
    correctOption: "Linear Time-Invariant system",
    difficulty: "beginner"
  },
  {
    question: "What is the primary advantage of digital signal processing over analog signal processing?",
    options: [
      "Simpler implementation",
      "Higher speed",
      "Lower cost",
      "Greater flexibility and precision"
    ],
    correctOption: "Greater flexibility and precision",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a direct application of the Discrete Fourier Transform (DFT)?",
    options: [
      "Signal amplification",
      "Analog filter design",
      "Image compression",
      "Solving differential equations"
    ],
    correctOption: "Image compression",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of windowing a signal before applying the DFT?",
    options: [
      "To sharpen the signal in the time domain",
      "To reduce spectral leakage",
      "To remove noise from the signal",
      "To increase the signal's amplitude"
    ],
    correctOption: "To reduce spectral leakage",
    difficulty: "intermediate"
  },
  {
    question: "Which filter type is characterized by a finite impulse response?",
    options: [
      "FIR filter",
      "Butterworth filter",
      "Chebyshev filter",
      "IIR filter"
    ],
    correctOption: "FIR filter",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of a guard band in the sampling process?",
    options: [
      "To amplify the signal",
      "To protect against aliasing",
      "To filter out noise",
      "To increase the sampling rate"
    ],
    correctOption: "To protect against aliasing",
    difficulty: "intermediate"
  },
  {
    question: "What is the bilinear transform used for in DSP?",
    options: [
      "Performing convolution",
      "Converting analog filters to digital filters",
      "Converting digital filters to analog filters",
      "Analyzing signal spectra"
    ],
    correctOption: "Converting analog filters to digital filters",
    difficulty: "intermediate"
  },
  {
    question: "What is the significance of the region of convergence (ROC) in the Z-transform?",
    options: [
      "It is used to calculate the filter coefficients.",
      "It indicates the stability of the system.",
      "It defines the time-domain characteristics of the signal.",
      "It determines the frequency response of the system."
    ],
    correctOption: "It indicates the stability of the system.",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a method for designing optimal FIR filters?",
    options: [
      "Parks-McClellan algorithm",
      "Chebyshev method",
      "Bilinear transform method",
      "Butterworth method"
    ],
    correctOption: "Parks-McClellan algorithm",
    difficulty: "beginner"
  },
  {
    question: "What is the primary advantage of using overlap-add and overlap-save methods?",
    options: [
      "Simplification of DFT computation",
      "Reduction of aliasing",
      "Improvement of filter response",
      "Efficient implementation of long convolutions"
    ],
    correctOption: "Efficient implementation of long convolutions",
    difficulty: "advanced"
  },
  {
    question: "What is the function of a multirate DSP system?",
    options: [
      "To filter signals with multiple frequency components",
      "To amplify signals with varying amplitudes",
      "To process multiple signals simultaneously",
      "To change the sampling rate of a signal"
    ],
    correctOption: "To change the sampling rate of a signal",
    difficulty: "beginner"
  },
  {
    question: "What is the difference between narrowband and wideband signals?",
    options: [
      "Narrowband signals are periodic, while wideband signals are aperiodic.",
      "Narrowband signals have a small bandwidth relative to their center frequency, while wideband signals have a large bandwidth.",
      "Narrowband signals are digital, while wideband signals are analog.",
      "Narrowband signals have high power, while wideband signals have low power."
    ],
    correctOption: "Narrowband signals have a small bandwidth relative to their center frequency, while wideband signals have a large bandwidth.",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a common application of DSP in telecommunications?",
    options: [
      "Power generation",
      "Chemical processing",
      "Image processing",
      "Mobile communication"
    ],
    correctOption: "Mobile communication",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of an anti-aliasing filter?",
    options: [
      "To remove noise from the signal",
      "To remove high-frequency components before sampling",
      "To convert digital signals to analog signals",
      "To amplify the signal"
    ],
    correctOption: "To remove high-frequency components before sampling",
    difficulty: "beginner"
  },
  {
    question: "What is the relationship between the time domain and the frequency domain?",
    options: [
      "They represent the same information in different forms.",
      "They are completely unrelated.",
      "The frequency domain represents amplitude, while the time domain represents phase.",
      "The time domain represents amplitude, while the frequency domain represents phase."
    ],
    correctOption: "They represent the same information in different forms.",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a common type of noise encountered in signal processing?",
    options: [
      "Red noise",
      "White noise",
      "Blue noise",
      "All of the above"
    ],
    correctOption: "All of the above",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of signal averaging?",
    options: [
      "To amplify the signal",
      "To reduce the noise in a signal",
      "To convert analog signals to digital signals",
      "To increase the signal frequency"
    ],
    correctOption: "To reduce the noise in a signal",
    difficulty: "intermediate"
  },
  {
    question: "What is the difference between linear and circular convolution?",
    options: [
      "Circular convolution is faster than linear convolution.",
      "Linear convolution is faster than circular convolution.",
      "Linear convolution assumes the signals are zero-padded, while circular convolution assumes the signals are periodic.",
      "Linear convolution is performed in the time domain, while circular convolution is performed in the frequency domain."
    ],
    correctOption: "Linear convolution assumes the signals are zero-padded, while circular convolution assumes the signals are periodic.",
    difficulty: "intermediate"
  },
  {
    question: "What is the role of a window function in spectral analysis?",
    options: [
      "To reduce spectral leakage",
      "To increase the frequency resolution",
      "To filter out noise",
      "To amplify the signal"
    ],
    correctOption: "To reduce spectral leakage",
    difficulty: "intermediate"
  },
  {
    question: "What is the significance of the group delay of a filter?",
    options: [
      "It represents the average delay of the signal.",
      "It represents the delay of the signal amplitude.",
      "It represents the delay of the signal phase.",
      "It represents the maximum delay of the signal."
    ],
    correctOption: "It represents the delay of the signal phase.",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of the Z-transform in DSP?",
    options: [
      "To modulate signals",
      "To design analog filters",
      "To analyze continuous-time signals",
      "To analyze discrete-time signals and systems"
    ],
    correctOption: "To analyze discrete-time signals and systems",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of an ideal high-pass filter?",
    options: [
      "Passes frequencies above the cutoff frequency and blocks frequencies below it",
      "Passes frequencies below the cutoff frequency and blocks frequencies above it",
      "Blocks all frequencies",
      "Passes all frequencies"
    ],
    correctOption: "Passes frequencies above the cutoff frequency and blocks frequencies below it",
    difficulty: "intermediate"
  },
  {
    question: "What is the difference between causal and non-causal systems?",
    options: [
      "Causal systems are stable, while non-causal systems are unstable.",
      "Causal systems are linear, while non-causal systems are non-linear.",
      "Non-causal systems depend on future inputs, while causal systems depend only on past inputs.",
      "Causal systems depend on future inputs, while non-causal systems depend only on past inputs."
    ],
    correctOption: "Non-causal systems depend on future inputs, while causal systems depend only on past inputs.",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the Levinson-Durbin algorithm?",
    options: [
      "To perform convolution",
      "To solve the normal equations in linear prediction",
      "To design IIR filters",
      "To design FIR filters"
    ],
    correctOption: "To solve the normal equations in linear prediction",
    difficulty: "advanced"
  },
  {
    question: "What is the function of a Kalman filter?",
    options: [
      "To design IIR filters",
      "To estimate the state of a system from noisy measurements",
      "To design FIR filters",
      "To perform spectral analysis"
    ],
    correctOption: "To estimate the state of a system from noisy measurements",
    difficulty: "advanced"
  },
  {
    question: "What is the meaning of 'ergodicity' in the context of random signals?",
    options: [
      "The signal has a constant variance.",
      "The signal is periodic.",
      "Time averages equal ensemble averages.",
      "The signal has a constant mean."
    ],
    correctOption: "Time averages equal ensemble averages.",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the cepstrum in signal processing?",
    options: [
      "To perform modulation",
      "To analyze signal spectra",
      "To design digital filters",
      "To separate convolved signals"
    ],
    correctOption: "To separate convolved signals",
    difficulty: "advanced"
  },
  {
    question: "What is the difference between parametric and non-parametric spectral estimation?",
    options: [
      "Non-parametric methods assume a model for the signal, while parametric methods do not.",
      "Parametric methods assume a model for the signal, while non-parametric methods do not.",
      "Non-parametric methods are more accurate than parametric methods.",
      "Parametric methods are faster than non-parametric methods."
    ],
    correctOption: "Parametric methods assume a model for the signal, while non-parametric methods do not.",
    difficulty: "advanced"
  },
  {
    question: "What is the function of a subband coding technique?",
    options: [
      "To compress video signals",
      "To amplify signals",
      "To divide a signal into frequency bands for processing",
      "To compress audio signals"
    ],
    correctOption: "To divide a signal into frequency bands for processing",
    difficulty: "advanced"
  },
  {
    question: "What is the role of a whitening filter?",
    options: [
      "To amplify the signal",
      "To remove noise from the signal",
      "To convert a signal with colored noise to one with white noise",
      "To filter out specific frequencies"
    ],
    correctOption: "To convert a signal with colored noise to one with white noise",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the Yule-Walker equations?",
    options: [
      "To perform convolution",
      "To design FIR filters",
      "To design IIR filters",
      "To solve for the parameters of an autoregressive (AR) model"
    ],
    correctOption: "To solve for the parameters of an autoregressive (AR) model",
    difficulty: "advanced"
  },
  {
    question: "What is the difference between stationary and non-stationary signals?",
    options: [
      "Stationary signals are digital, while non-stationary signals are analog.",
      "Stationary signals have constant statistical properties over time, while non-stationary signals do not.",
      "Stationary signals are periodic, while non-stationary signals are aperiodic.",
      "Non-stationary signals have constant statistical properties over time, while stationary signals do not."
    ],
    correctOption: "Stationary signals have constant statistical properties over time, while non-stationary signals do not.",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a common application of DSP in medical imaging?",
    options: [
      "MRI",
      "Power generation",
      "Audio processing",
      "Chemical processing"
    ],
    correctOption: "MRI",
    difficulty: "beginner"
  },
  {
    question: "What is the primary function of a low-pass filter?",
    options: [
      "To pass high-frequency components",
      "To block all frequency components",
      "To amplify all frequency components",
      "To pass low-frequency components"
    ],
    correctOption: "To pass low-frequency components",
    difficulty: "beginner"
  },
  {
    question: "What is the purpose of quantization in the analog-to-digital conversion process?",
    options: [
      "To represent the amplitude of a continuous signal with a finite set of values",
      "To convert continuous-time signals to discrete-time signals",
      "To filter out noise",
      "To amplify the signal"
    ],
    correctOption: "To represent the amplitude of a continuous signal with a finite set of values",
    difficulty: "beginner"
  },
  {
    question: "What is the relationship between sampling rate and frequency resolution in the DFT?",
    options: [
      "Higher sampling rate leads to higher frequency resolution.",
      "Sampling rate only affects the maximum frequency that can be represented.",
      "Lower sampling rate leads to higher frequency resolution.",
      "Sampling rate and frequency resolution are independent."
    ],
    correctOption: "Higher sampling rate leads to higher frequency resolution.",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following is a characteristic of an IIR filter?",
    options: [
      "Non-recursive structure",
      "Finite impulse response",
      "Feedback in the filter structure",
      "Linear phase response"
    ],
    correctOption: "Feedback in the filter structure",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of zero-padding a signal before computing the DFT?",
    options: [
      "To increase the signal amplitude",
      "To filter out noise",
      "To improve the frequency resolution of the DFT",
      "To reduce spectral leakage"
    ],
    correctOption: "To improve the frequency resolution of the DFT",
    difficulty: "intermediate"
  },
  {
    question: "What is the effect of increasing the order of a filter?",
    options: [
      "It makes the filter response more gradual.",
      "It decreases the filter's gain.",
      "It makes the filter response sharper.",
      "It increases the filter's group delay."
    ],
    correctOption: "It makes the filter response sharper.",
    difficulty: "intermediate"
  },
  {
    question: "What is the difference between a Butterworth and a Chebyshev filter?",
    options: [
      "Butterworth filters have a sharper cutoff than Chebyshev filters.",
      "Butterworth filters have a flat passband and ripple in the stopband, while Chebyshev filters have ripple in the passband and a monotonic stopband.",
      "Chebyshev filters have a flat passband and ripple in the stopband, while Butterworth filters have ripple in the passband and a monotonic stopband.",
      "Chebyshev filters have a simpler implementation than Butterworth filters."
    ],
    correctOption: "Chebyshev filters have a flat passband and ripple in the stopband, while Butterworth filters have ripple in the passband and a monotonic stopband.",
    difficulty: "intermediate"
  },
  {
    question: "What is the significance of the Nyquist rate?",
    options: [
      "It is the optimal sampling rate for all signals.",
      "It is the maximum sampling rate allowed for a given signal.",
      "It is the minimum sampling rate required to avoid aliasing.",
      "It is the rate at which the signal's amplitude changes."
    ],
    correctOption: "It is the minimum sampling rate required to avoid aliasing.",
    difficulty: "intermediate"
  },
  {
    question: "What is the purpose of a matched filter?",
    options: [
      "To filter out noise",
      "To convert analog signals to digital signals",
      "To maximize the signal-to-noise ratio for a known signal",
      "To amplify the signal"
    ],
    correctOption: "To maximize the signal-to-noise ratio for a known signal",
    difficulty: "advanced"
  },
  {
    question: "What is the role of the autocorrelation function in DSP?",
    options: [
      "To measure the similarity between a signal and a delayed version of itself",
      "To calculate the signal's frequency spectrum",
      "To filter out noise",
      "To amplify the signal"
    ],
    correctOption: "To measure the similarity between a signal and a delayed version of itself",
    difficulty: "advanced"
  },
  {
    question: "What is the difference between linear phase and non-linear phase filters?",
    options: [
      "Linear phase filters are causal, while non-linear phase filters are non-causal.",
      "Linear phase filters have a constant group delay, while non-linear phase filters do not.",
      "Linear phase filters are always FIR filters, while non-linear phase filters are always IIR filters.",
      "Non-linear phase filters have a constant group delay, while linear phase filters do not."
    ],
    correctOption: "Linear phase filters have a constant group delay, while non-linear phase filters do not.",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the Prony's method?",
    options: [
      "To design IIR filters",
      "To perform convolution",
      "To design FIR filters",
      "To model a signal as a sum of exponentials"
    ],
    correctOption: "To model a signal as a sum of exponentials",
    difficulty: "advanced"
  },
  {
    question: "What is the function of a lattice filter?",
    options: [
      "To design IIR filters",
      "To perform spectral analysis",
      "To implement adaptive filters",
      "To design FIR filters"
    ],
    correctOption: "To implement adaptive filters",
    difficulty: "advanced"
  },
  {
    question: "What is the meaning of 'coherence' in the context of signal analysis?",
    options: [
      "The phase of a signal",
      "The correlation between two signals at the same frequency",
      "The amplitude of a signal",
      "The frequency of a signal"
    ],
    correctOption: "The correlation between two signals at the same frequency",
    difficulty: "advanced"
  },
  {
    question: "What is the purpose of the Wigner-Ville distribution?",
    options: [
      "To analyze signal spectra",
      "To design digital filters",
      "To perform modulation",
      "To analyze non-stationary signals in the time-frequency domain"
    ],
    correctOption: "To analyze non-stationarysignals in the time-frequency domain",
    difficulty: "advanced"
  },
  {
    question: "What is the role of a predictor in linear predictive coding (LPC)?",
    options: [
      "To filter out specific frequencies",
      "To amplify the signal",
      "To remove noise from the signal",
      "To estimate future samples of a signal based on past samples"
    ],
    correctOption: "To estimate future samples of a signal based on past samples",
    difficulty: "advanced"
  },
  {
    question: "What is the difference between narrowband and broadband processing?",
    options: [
      "Narrowband processing is performed in the time domain, while broadband processing is performed in the frequency domain.",
      "Narrowband processing is simpler than broadband processing.",
      "Broadband processing deals with signals with a small bandwidth, while narrowband processing deals with signals with a large bandwidth.",
      "Narrowband processing deals with signals with a small bandwidth, while broadband processing deals with signals with a large bandwidth."
    ],
    correctOption: "Narrowband processing deals with signals with a small bandwidth, while broadband processing deals with signals with a large bandwidth.",
    difficulty: "advanced"
  },
  {
    question: "Which of the following is a basic operation performed in DSP?",
    options: [
      "Differentiation",
      "Integration",
      "Convolution",
      "Modulation"
    ],
    correctOption: "Convolution",
    difficulty: "beginner"
  },
  {
    question: "What does the term 'aliasing' refer to in the context of sampling?",
    options: [
      "The process of converting digital signals to analog signals",
      "The process of amplifying signals",
      "The process of filtering high-frequency components",
      "The distortion of a signal due to insufficient sampling rate"
    ],
    correctOption: "The distortion of a signal due to insufficient sampling rate",
    difficulty: "beginner"
  },
  {
    question: "What is the function of an Analog-to-Digital Converter (ADC)?",
    options: [
      "To convert analog signals to digital signals",
      "To convert digital signals to analog signals",
      "To amplify digital signals",
      "To filter analog signals"
    ],
    correctOption: "To convert analog signals to digital signals",
    difficulty: "beginner"
  },
  {
    question: "What condition must be satisfied for a digital filter to be stable?",
    options: [
      "All poles must lie inside the unit circle in the z-plane",
      "The impulse response must be infinite",
      "The system must have no feedback",
      "All zeros must lie outside the unit circle"
    ],
    correctOption: "All poles must lie inside the unit circle in the z-plane",
    difficulty: "beginner"
  },
  {
    question: "What is the primary use of the Z-transform in DSP?",
    options: [
      "To increase signal bandwidth",
      "To design power amplifiers",
      "To analyze linear, discrete-time systems",
      "To convert analog signals to digital"
    ],
    correctOption: "To analyze linear, discrete-time systems",
    difficulty: "intermediate"
  },
  {
    question: "Which method is most efficient for implementing convolution in frequency domain?",
    options: [
      "Windowing method",
      "Difference equations",
      "FFT-based convolution",
      "Direct convolution"
    ],
    correctOption: "FFT-based convolution",
    difficulty: "advanced"
  },
  {
    question: "What is the Gibbs phenomenon associated with?",
    options: [
      "Overshoot in signal reconstruction using Fourier series",
      "Clipping of analog signals",
      "Zero-padding of digital signals",
      "Phase distortion in filters"
    ],
    correctOption: "Overshoot in signal reconstruction using Fourier series",
    difficulty: "advanced"
  },
  {
    question: "Which property of DFT makes it suitable for efficient signal processing?",
    options: [
      "Asymmetry and continuity",
      "Non-linear behavior",
      "Periodicity and symmetry",
      "Integration over infinite time"
    ],
    correctOption: "Periodicity and symmetry",
    difficulty: "advanced"
  },
  {
    question: "What does DSP stand for in electronics?",
    options: [
      "Digital Signal Processing",
      "Digital Sound Platform",
      "Data Storage Protocol",
      "Device Switching Power"
    ],
    correctOption: "Digital Signal Processing",
    difficulty: "beginner"
  },
  {
    question: "Which of the following is a key operation in DSP?",
    options: [
      "Scanning",
      "Compiling",
      "Printing",
      "Filtering"
    ],
    correctOption: "Filtering",
    difficulty: "beginner"
  },
  {
    question: "What is a signal in DSP?",
    options: [
      "A function representing physical quantities",
      "A voltage regulator",
      "An error message",
      "A circuit board"
    ],
    correctOption: "A function representing physical quantities",
    difficulty: "beginner"
  },
  {
    question: "Which device converts analog signals to digital signals?",
    options: [
      "DAC",
      "GPU",
      "ADC",
      "CPU"
    ],
    correctOption: "ADC",
    difficulty: "beginner"
  },
  {
    question: "What does the sampling process in DSP involve?",
    options: [
      "Playing back the signal",
      "Changing the signal speed",
      "Measuring the signal at regular intervals",
      "Measuring the signal once"
    ],
    correctOption: "Measuring the signal at regular intervals",
    difficulty: "beginner"
  },
  {
    question: "What is the Nyquist rate in digital signal processing?",
    options: [
      "Twice the highest frequency of the signal",
      "Half the highest frequency of the signal",
      "Twice the sampling interval",
      "Equal to the signal frequency"
    ],
    correctOption: "Twice the highest frequency of the signal",
    difficulty: "intermediate"
  },
  {
    question: "Which transform is widely used to analyze frequency components of a signal?",
    options: [
      "Fourier Transform",
      "Z-Transform",
      "Laplace Transform",
      "Wavelet Transform"
    ],
    correctOption: "Fourier Transform",
    difficulty: "intermediate"
  },
  {
    question: "What is the primary function of a digital filter?",
    options: [
      "To compress audio",
      "To duplicate the signal",
      "To modify specific aspects of a signal",
      "To increase file size"
    ],
    correctOption: "To modify specific aspects of a signal",
    difficulty: "intermediate"
  },
  {
    question: "Which of the following describes an FIR filter?",
    options: [
      "A filter with finite-duration impulse response",
      "A filter with infinite-duration impulse response",
      "A frequency-insensitive response",
      "An unstable feedback system"
    ],
    correctOption: "A filter with finite-duration impulse response",
    difficulty: "intermediate"
  },
  {
    question: "What is aliasing in the context of DSP?",
    options: [
      "Noise cancellation",
      "Distortion due to under-sampling",
      "Over-amplification of a signal",
      "Enhancement of high frequencies"
    ],
    correctOption: "Distortion due to under-sampling",
    difficulty: "intermediate"
  }
];