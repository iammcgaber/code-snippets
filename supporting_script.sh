#!/bin/bash

help_function() {
  echo "Usage: util-function [-h] [-t]"
  echo
  echo "-h     Print this help menu."
  echo
  echo "-t     Do something else.  Hopefully it start with t."
}

t_flag_function() {
  echo "This is the function that gets called when you pass a -t flag."
  echo "But you can also take an argument."
  echo "The argument to this function was: $1"
}

while getopts ":ht:" opt; do
  case ${opt} in
    h ) # process option a
      help_function
      ;;
    t ) # process option t
      t_flag_function ${OPTARG}
      ;;
    : ) echo "You must supply an argument when using the -${OPTARG} flag." 1>&2
      ;;
    * ) echo "We don't serve those types of flags in these parts."
      ;;
  esac
done
