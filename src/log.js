import minilog from 'minilog';

minilog.enable();

const log = typeof window !== 'undefined'
  ? minilog('frontend')
  : minilog('backend');

if (__DEV__ && __SERVER__) {
  const console_log = global.console.log;
  global.console.log = function() {
    const args = arguments;
    if (args.length == 1 && typeof args[0] === 'string' && args[0].match(/^\[(HMR|WDS)\]/)) {
      console_log('backend ' + args[0]);
    } else {
      console_log.apply(console_log, args);
    }
  };
}

export default log;
