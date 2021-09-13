import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import pathRoutes from '../../../../../helper/pathRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { cloneDeep, isEmpty } from 'lodash';
import { unwrapResult } from '@reduxjs/toolkit';

function Header() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])


  return (
    <>
      
    </>
  )
}

export default memo(Header)