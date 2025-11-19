function changeButton(btn) {
   
    if (!btn) return;
    const forSpacing = 'for-spacing';
    const forSpacing2 = 'for-spacing-2';

    if (btn.classList.contains(forSpacing)){
      btn.classList.remove(forSpacing);
      btn.classList.add(forSpacing2);
    }
    else if (btn.classList.contains(forSpacing2)){
      btn.classList.remove(forSpacing2);
      btn.classList.add(forSpacing);
    }
    else {
      btn.classList.add(forSpacing);
    }
}